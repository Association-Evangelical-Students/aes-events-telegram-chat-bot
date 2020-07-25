import { Either, left } from '@sweet-monads/either';
import { IScene, IPerformOptions } from '../../common';
import { Roles } from '../../../../contracts';
import { ITelegramApi } from '../../../../telegram-api';
import { IPersonsRepository } from '../../../../repositories';
import { StartSceneAdmin } from './admin';
import { StartSceneRegular } from './regular';

export class StartScene implements IScene<void> {
  constructor(
    private api: ITelegramApi,
    private personsRepo: IPersonsRepository,
  ) {}

  public async perform(options: IPerformOptions, role: Roles): Promise<Either<Error, void>> {
    const chatId = options.telegramRequest.message?.chat.id;
    if (chatId === undefined) {
      return left(new Error('chat id is undefined'));
    }

    const personTelegramId = options.telegramRequest.message?.from?.id;
    if (personTelegramId === undefined) {
      return left(new Error('person Telegram Id is undefined'));
    }

    const personFirstName = options.telegramRequest.message?.chat.first_name;
    if (personFirstName === undefined) {
      return left(new Error('person first name is undefined'));
    }

    await this.personsRepo.createOne({
      telegramChatId: chatId,
      telegramId: personTelegramId,
      firstName: personFirstName,
      lastName: options.telegramRequest.message?.chat.last_name,
      telegramUsername: options.telegramRequest.message?.chat.username,
    });

    if (role === Roles.Admin) {
      const subScene = new StartSceneAdmin(this.api, this.personsRepo);

      return subScene.perform(options, role);
    }

    if (role === Roles.Regular) {
      const subScene = new StartSceneRegular(this.api, this.personsRepo);

      return subScene.perform(options, role);
    }

    return left(new Error('invalid role'));
  }
}
