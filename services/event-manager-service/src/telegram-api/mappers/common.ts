import { Either } from '@sweet-monads/either';

export interface IMapper<I, O> {
  map(input: I): Either<unknown, O>;
}
