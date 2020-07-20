import { Either } from '@sweet-monads/either';
import { IScene, IPerformOptions } from './common';
import { TSendMessageOptionsType, TInlineKeyboardButtonType } from '../contracts';
import { ITelegramApi } from '../telegram-api';

export interface IStartPerformOptions extends IPerformOptions {
  chatId: string | number;
}

export class StartScene implements IScene {
  constructor(private api: ITelegramApi) {}

  public async perform(options: IStartPerformOptions): Promise<Either<unknown, void>> {
    const buttons: TInlineKeyboardButtonType[] = [
      {
        text: 'Show events',
        callbackData: 'show-events',
      } as TInlineKeyboardButtonType,
      {
        text: 'Go back',
        callbackData: 'go-back',
      } as TInlineKeyboardButtonType,
    ];

    return this.api.sendMessage({
      chatId: options.chatId,
      text: 'Hello, please, choose here',
      replyMarkup: {
        inlineKeyboard: [buttons],
      },
    } as TSendMessageOptionsType)
  }
}
