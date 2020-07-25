import { Either, left } from '@sweet-monads/either';
import { IScene, IPerformOptions } from '../common';
import { TSendMessageOptionsType, TInlineKeyboardButtonType, Roles } from '../../../contracts';
import { ITelegramApi } from '../../../telegram-api';
import { IEventsRepository } from '../../../repositories';

export class ShowEventsScene implements IScene<void> {
  constructor(
    private api: ITelegramApi,
    private eventsRepo: IEventsRepository,
  ) {}

  public async perform(options: IPerformOptions, _role: Roles): Promise<Either<Error, void>> {
    const chatId = options.telegramRequest.callback_query?.message?.chat.id;

    const events = await this.eventsRepo.getAll();
    if (events.isLeft()) {
      return left(events.value as Error);
    }

    const buttons = events.value.map(event => ([
      {
        text: event.title,
        callbackData: `show-event:${event.id}`,
      }  as TInlineKeyboardButtonType,
    ]));

    return this.api.sendMessage({
      chatId,
      text: 'Available events:',
      replyMarkup: {
        inlineKeyboard: buttons,
      },
    } as TSendMessageOptionsType)
  }
}
