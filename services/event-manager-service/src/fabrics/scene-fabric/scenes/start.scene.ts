import { Either } from '@sweet-monads/either';
import { IScene, IPerformOptions } from '../common';
import { TSendMessageOptionsType, TInlineKeyboardButtonType, SHOW_EVENTS_CALLBACK_DATA } from '../../../contracts';
import { ITelegramApi } from '../../../telegram-api';

export class StartScene implements IScene {
  constructor(private api: ITelegramApi) {}

  public async perform(options: IPerformOptions): Promise<Either<unknown, void>> {
    const chatId = options.telegramRequest.message?.chat.id;
    const buttons: TInlineKeyboardButtonType[] = [
      {
        text: 'Show events',
        callbackData: SHOW_EVENTS_CALLBACK_DATA,
      } as TInlineKeyboardButtonType,
      {
        text: 'Go back',
        callbackData: 'go-back',
      } as TInlineKeyboardButtonType,
    ];

    return this.api.sendMessage({
      chatId,
      text: 'Hello, please, choose here',
      replyMarkup: {
        inlineKeyboard: [buttons],
      },
    } as TSendMessageOptionsType)
  }
}
