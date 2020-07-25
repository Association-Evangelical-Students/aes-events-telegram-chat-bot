import { Either } from '@sweet-monads/either';
import { TelegramUpdateType, Roles } from '../../contracts';

export interface IPerformOptions {
  telegramRequest: TelegramUpdateType;
}

export interface IScene<T> {
  perform(options: IPerformOptions, role: Roles): Promise<Either<Error, T>>
}
