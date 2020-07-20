import { Either } from '@sweet-monads/either';

export interface IPerformOptions {}

export interface IScene {
  perform(options: IPerformOptions): Promise<Either<unknown, unknown>>
}
