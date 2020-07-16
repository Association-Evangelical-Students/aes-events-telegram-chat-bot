import { APIGatewayEvent, Context, Callback } from 'aws-lambda';
import { Logger } from './libs/logger';

export const handler = async (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
): Promise<any> => {
  const logger = new Logger({ level: 'info' });

  logger.info('Incomming message', { event });

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
};
