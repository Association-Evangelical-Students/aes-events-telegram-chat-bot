import { Either, right, left } from '@sweet-monads/either';
import { ITelegramApi } from '../../telegram-api';
import { IEventsRepository, IPersonsRepository } from '../../repositories';
import { IScene } from './common';
import { StartScene, ShowEventsScene } from './scenes';
import { SCENE_FABRIC_TYPES } from './types';

interface IRepos {
  eventsRepo: IEventsRepository;
  personsRepo: IPersonsRepository;
}

export const sceneFabric = (type: symbol, api: ITelegramApi, repos: IRepos): Either<Error, IScene<void>> => {
  switch (type) {
  case SCENE_FABRIC_TYPES.start:
    return right(new StartScene(api, repos.personsRepo));
  case SCENE_FABRIC_TYPES.showEvents:
    return right(new ShowEventsScene(api, repos.eventsRepo));
  default:
    return left(new Error('Provided scene type is incorrect'));
  }
};