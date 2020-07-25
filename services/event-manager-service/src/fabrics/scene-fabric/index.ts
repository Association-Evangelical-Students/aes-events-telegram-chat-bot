import { Either, right, left } from '@sweet-monads/either';
import { ITelegramApi } from '../../telegram-api';
import { IScene } from './common';
import { StartScene, ShowEventsScene } from './scenes';
import { SCENE_FABRIC_TYPES } from './types';

export const sceneFabric = (type: symbol, api: ITelegramApi): Either<Error, IScene> => {
  switch (type) {
  case SCENE_FABRIC_TYPES.start:
    return right(new StartScene(api));
  case SCENE_FABRIC_TYPES.showEvents:
    return right(new ShowEventsScene(api));
  default:
    return left(new Error('Provided scene type is incorrect'));
  }
};