import { APIGatewayEvent, Context, Callback } from 'aws-lambda';
import { Logger } from '@Association-Evangelical-Students/logger';
import { AxiosClient, IAxiosError } from '@Association-Evangelical-Students/axios-client';
import { TelegramUpdate } from './contracts';
import { TelegramApi } from './telegram-api';
import { StartScene } from './scenes';
import config from '../config';

const logger = new Logger({ level: 'info' });
const telegramDefaultRequester = new AxiosClient(logger, {
  baseURL: `https://api.telegram.org/bot${config.TELEGRAM_TOKEN}`,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
  handlers: {
    response: {
      rejected: (error: IAxiosError): IAxiosError => {
        logger.error({
          error: {
            statusCode: error?.response?.status,
            data: error?.response?.data,
          },
        }, 'Axios Response Error');

        return error;
      }
    },
  },
});
const api = new TelegramApi(telegramDefaultRequester);
const startScene = new StartScene(api);

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

    const result = await startScene.perform({ chatId: update.message?.chat.id })
    if (result.isLeft()) {
      logger.error({ error: result.value });

      return {
        statusCode: 400,
        body: JSON.stringify({ success: false }),
      };
    }

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
