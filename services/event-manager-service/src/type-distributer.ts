import { TelegramUpdateType, SHOW_EVENTS_CALLBACK_DATA } from './contracts';
import { SCENE_FABRIC_TYPES } from './types';

export const getSceneType = (update: TelegramUpdateType): symbol => {
  if (update.callback_query?.data === SHOW_EVENTS_CALLBACK_DATA) {
    return SCENE_FABRIC_TYPES.showEvents;
  }

  return SCENE_FABRIC_TYPES.start;
};