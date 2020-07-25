import { Either } from '@sweet-monads/either';
import { IScene, IPerformOptions } from '../../common';
import {
  TSendMessageOptionsType,
  TInlineKeyboardButtonType,
  SHOW_EVENTS_CALLBACK_DATA,
  Roles,
} from '../../../../contracts';
import { ITelegramApi } from '../../../../telegram-api';
import { IPersonsRepository } from '../../../../repositories';

export class StartSceneRegular implements IScene<void> {
  constructor(
    private api: ITelegramApi,
    private personsRepo: IPersonsRepository,
  ) {}

  public async perform(options: IPerformOptions, role: Roles): Promise<Either<Error, void>> {
    const chatId = options.telegramRequest.message?.chat.id;

    const buttons: TInlineKeyboardButtonType[] = [
      {
        text: 'Show events',
        callbackData: SHOW_EVENTS_CALLBACK_DATA,
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
