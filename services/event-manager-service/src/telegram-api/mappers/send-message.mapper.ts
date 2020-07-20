import { Either, left, right } from '@sweet-monads/either';
import { IMapper } from './common';
import {
  TSendMessageOptions,
  TSendMessageOptionsType,
  SendMessageOptions,
  SendMessageOptionsType,
  TSendMessageReplyMarkupType,
  SendMessageReplyMarkupType,
  InlineKeyboardMarkup,
  ReplyKeyboardMarkup,
  ReplyKeyboardRemove,
  ForceReply,
  TInlineKeyboardMarkup,
  TReplyKeyboardMarkup,
  TReplyKeyboardRemove,
  TForceReply,
  LoginUrl,
  LoginUrlType,
  TLoginUrl,
  TLoginUrlType,
  TKeyboardButtonPollType,
  KeyboardButtonPollType,
  TKeyboardButtonPollTypeType,
  KeyboardButtonPollTypeType,
} from '../../contracts';
import { TelegramApiInternalValidationError } from '../../errors';

export class SendMessageMapper implements IMapper<TSendMessageOptionsType, SendMessageOptionsType> {
  public map(input: TSendMessageOptionsType): Either<TelegramApiInternalValidationError, SendMessageOptionsType> {
    if (!TSendMessageOptions.guard(input)) {
      return left(
        new TelegramApiInternalValidationError(
          'Input in sendMessageMapper does not comply signature TSendMessageOptions',
        ),
      );
    }

    try {
      const mapped = SendMessageOptions.check({
        chat_id: input.chatId,
        text: input.text,
        parse_mode: input.parseMode,
        disable_web_page_preview: input.disableWebPagePreview,
        disable_notification: input.disableNotification,
        reply_to_message_id: input.replyToMessageId,
        reply_markup: this.mapReplyMarkup(input.replyMarkup),
      });

      return right(mapped);
    } catch (error) {
      return left(
        new TelegramApiInternalValidationError('Mapped SendMessageOptions does not comply signature', error),
      );
    }
  }

  private mapReplyMarkup(
    input?: TSendMessageReplyMarkupType,
  ): SendMessageReplyMarkupType | undefined {
    if (input === undefined) {
      return undefined;
    }

    if (TInlineKeyboardMarkup.guard(input)) {
      try {
        return InlineKeyboardMarkup.check({
          inline_keyboard: input.inlineKeyboard.map(
            k => k.map((keyboard) => ({
              text: keyboard.text,
              url: keyboard.url,
              login_url: this.mapLoginUrl(keyboard.loginUrl),
              callback_data: keyboard.callbackData,
              switch_inline_query: keyboard.switchInlineQuery,
              switch_inline_query_current_chat: keyboard.switchInlineQueryCurrentChat,
            })),
          ),
        });
      } catch ({ message }) {
        throw new TelegramApiInternalValidationError('Mapped InlineKeyboardMarkup does not comply signature', message);
      }
    }

    if (TReplyKeyboardMarkup.guard(input)) {
      try {
        return ReplyKeyboardMarkup.check({
          keyboard: input.keyboard.map((keyboard) => ({
            text: keyboard.text,
            request_contact: keyboard.requestContact,
            request_location: keyboard.requestLocation,
            request_poll: this.mapKeyboardButtonPollType(keyboard.requestPoll),
          })),
          resize_keyboard: input.resizeKeyboard,
          one_time_keyboard: input.oneTimeKeyboard,
          selective: input.selective,
        });
      } catch ({ message }) {
        throw new TelegramApiInternalValidationError('Mapped ReplyKeyboardMarkup does not comply signature', message);
      }
    }

    if (TReplyKeyboardRemove.guard(input)) {
      try {
        return ReplyKeyboardRemove.check({
          remove_keyboard: input.removeKeyboard,
          selective: input.selective,
        });
      } catch ({ message }) {
        throw new TelegramApiInternalValidationError('Mapped ReplyKeyboardRemove does not comply signature', message);
      }
    }

    if (TForceReply.guard(input)) {
      try {
        return ForceReply.check({
          force_reply: input.forceReply,
          selective: input.selective,
        });
      } catch ({ message }) {
        throw new TelegramApiInternalValidationError('Mapped ForceReply does not comply signature', message);
      }
    }

    throw new TelegramApiInternalValidationError('TSendMessageReplyMarkupType does not comply any given signature');
  }

  private mapLoginUrl(input?: TLoginUrlType): LoginUrlType | undefined {
    if (input === undefined) {
      return undefined;
    }

    if (!TLoginUrl.guard(input)) {
      throw new TelegramApiInternalValidationError('Input in mapLoginUrl does not comply signature TLoginUrl');
    }

    try {
      return LoginUrl.check({
        url: input.url,
        forward_text: input.forwardText,
        bot_username: input.botUsername,
        request_write_access: input.requestWriteAccess,
      });
    } catch ({ message }) {
      throw new TelegramApiInternalValidationError('Mapped LoginUrl does not comply signature', message);
    }
  }

  private mapKeyboardButtonPollType(input?: TKeyboardButtonPollTypeType): KeyboardButtonPollTypeType | undefined {
    if (input === undefined) {
      return undefined;
    }

    if (!TKeyboardButtonPollType.guard(input)) {
      throw new TelegramApiInternalValidationError(
        'Input in mapKeyboardButtonPollType does not comply signature TKeyboardButtonPollType',
      );
    }

    try {
      return KeyboardButtonPollType.check({
        type: input.type,
      });
    } catch ({ message }) {
      throw new TelegramApiInternalValidationError('Mapped KeyboardButtonPollType does not comply signature', message);
    }
  }
}
