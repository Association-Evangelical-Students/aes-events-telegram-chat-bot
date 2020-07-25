import { APIGatewayEvent, Context, Callback } from 'aws-lambda';
import { Logger } from '@Association-Evangelical-Students/logger';
import { TelegramUpdate } from './contracts';
import { TelegramApi } from './telegram-api';
import { EventsRepository, PersonsRepository } from './repositories';
import { requesterFabric, sceneFabric } from './fabrics';
import { REQUESTER_FABRIC_TYPES } from './types';
import { extractUsername, getRoleByUsername } from './utils';
import { getSceneType } from './type-distributer';

const logger = new Logger({ level: 'info' });
const telegramDefaultRequester = requesterFabric(REQUESTER_FABRIC_TYPES.telegramDefault, logger);
if (telegramDefaultRequester.isLeft()) {
  logger.error('Telegram Default Requester error', telegramDefaultRequester.value);
  process.exit(1);
}
const eventsRepository = new EventsRepository();
const personsRepository = new PersonsRepository(logger);
const api = new TelegramApi(telegramDefaultRequester.value);

export const handler = async (event: APIGatewayEvent, context: Context, callback: Callback): Promise<any> => {
  logger.info('Event: '+JSON.stringify(event.body));

  try {
    const body = JSON.parse(event.body ?? '');
    const update = TelegramUpdate.check(body);

    const sceneType = getSceneType(update);
    const scene = sceneFabric(sceneType, api, { eventsRepo: eventsRepository, personsRepo: personsRepository });
    if (scene.isLeft()) {
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, error: scene.value }),
      };
    }

    const username = extractUsername(update);
    const role = getRoleByUsername(username);

    const result = await scene.value.perform({ telegramRequest: update }, role)
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
