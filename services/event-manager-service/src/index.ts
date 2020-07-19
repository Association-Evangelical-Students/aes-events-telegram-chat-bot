import { APIGatewayEvent, Context, Callback } from 'aws-lambda';
import { Logger } from '../../../lib/logger';
import { AxiosClient } from '../../../lib/axios-client';
import { TelegramUpdate } from './contracts';
import { TelegramBot } from './telegram-api';
import config from '../config';

const logger = new Logger({ level: 'info' });
const telegramDefaultRequester = new AxiosClient({
  baseURL: `https://api.telegram.org/bot${config.TELEGRAM_TOKEN}`,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});
const bot = new TelegramBot(telegramDefaultRequester);

export const handler = async (event: APIGatewayEvent, context: Context, callback: Callback): Promise<any> => {
  logger.info('Event: '+JSON.stringify(event.body));

  try {
    const body = JSON.parse(event.body ?? '');
    const update = TelegramUpdate.check(body);
    if (update.message?.chat.id === undefined) {
      logger.error('can not extract chat ID');

      return {
        statusCode: 500,
        body: JSON.stringify({ success: false }),
      };
    }
    await bot.sendMessage({
      chatId: update.message?.chat.id,
      text: 'hello my friend',
      parseMode: undefined,
      disableWebPagePreview: undefined,
      disableNotification: undefined,
      replyToMessageId: undefined,
      replyMarkup: undefined,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    logger.error('Handler Error:'+error);

    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error }),
    };
  }
};
