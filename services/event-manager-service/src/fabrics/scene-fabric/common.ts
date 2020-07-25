import { Either } from '@sweet-monads/either';
import { TelegramUpdateType } from '../../contracts';

export interface IPerformOptions {
  telegramRequest: TelegramUpdateType;
}

export interface IScene {
  perform(options: IPerformOptions): Promise<Either<unknown, unknown>>
}
