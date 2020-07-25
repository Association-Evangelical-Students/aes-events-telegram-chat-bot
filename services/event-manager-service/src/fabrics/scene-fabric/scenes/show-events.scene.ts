import { Either } from '@sweet-monads/either';
import { IScene, IPerformOptions } from '../common';
import { TSendMessageOptionsType, TInlineKeyboardButtonType } from '../../../contracts';
import { ITelegramApi } from '../../../telegram-api';

const events = [
  {
    id: '1',
    title: 'Event 1',
  },
  {
    id: '2',
    title: 'Event 2',
  },
  {
    id: '3',
    title: 'Event 3',
  },
  {
    id: '4',
    title: 'Event 4',
  },
  {
    id: '5',
    title: 'Event 5',
  },
];

export class ShowEventsScene implements IScene {
  constructor(private api: ITelegramApi) {}

  public async perform(options: IPerformOptions): Promise<Either<unknown, void>> {
    const chatId = options.telegramRequest.callback_query?.message?.chat.id;
    const buttons = events.map(event => ([
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
