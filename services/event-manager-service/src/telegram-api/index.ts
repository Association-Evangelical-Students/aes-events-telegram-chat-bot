import { Either, left, right } from '@sweet-monads/either';
import { IAxiosClient } from '@Association-Evangelical-Students/axios-client';
import { TSendMessageOptionsType } from '../contracts';
import { SendMessageMapper } from './mappers';
import { pickBy, identity } from '../utils';

export interface ITelegramApi {
  sendMessage(options: TSendMessageOptionsType): Promise<Either<unknown, void>>;
}

export class TelegramApi implements ITelegramApi {
  public sendMessageMapper = new SendMessageMapper();

  constructor(private telegramRequester: IAxiosClient) {}

  public async sendMessage(options: TSendMessageOptionsType): Promise<Either<unknown, void>> {
    const mapped = this.sendMessageMapper.map(options);
    if (mapped.isLeft()) {
      return left(mapped.value);
    }
    await this.telegramRequester.post('/sendMessage', pickBy(mapped.value, identity));

    return right(undefined);
  }
}
