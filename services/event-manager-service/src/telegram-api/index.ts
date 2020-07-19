import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';
import { IAxiosClient } from '../../../../lib/axios-client';
import { TSendMessageOptionsType } from '../contracts';
import { SendMessageMapper } from './mappers';

export interface ITelegramBotConfig {}

export class TelegramBot {
  public sendMessageMapper = new SendMessageMapper();

  constructor(private telegramRequester: IAxiosClient) {}

  public async sendMessage(options: TSendMessageOptionsType): Promise<void> {
    await this.telegramRequester.post(
      '/sendMessage',
      pickBy(this.sendMessageMapper.map(options), identity),
    );
  }
}
