import { Either, right, left } from '@sweet-monads/either';
import { AxiosClient, IAxiosClient, IAxiosError } from '@Association-Evangelical-Students/axios-client';
import { ILogger } from '@Association-Evangelical-Students/logger';
import { REQUESTER_FABRIC_TYPES } from './types';
import config from '../../../config';

export const requesterFabric = (type: symbol, logger: ILogger): Either<Error, IAxiosClient> => {
  switch (type) {
  case REQUESTER_FABRIC_TYPES.telegramDefault:
    const axiosConfig = {
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
    };

    return right(new AxiosClient(logger, axiosConfig));
  default:
    return left(new Error('Provided requester type is incorrect'));
  }
};