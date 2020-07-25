import { ILogger } from '@Association-Evangelical-Students/logger';
import { Either, right } from '@sweet-monads/either';
import { PersonEntityType } from '../../contracts';

export interface IPersonsRepository {
  createOne(input: PersonEntityType): Promise<Either<Error, void>>;
  getAll(): Promise<Either<Error, PersonEntityType[]>>;
}

export class PersonsRepository implements IPersonsRepository {
  constructor(private logger: ILogger) {}

  public async createOne(input: PersonEntityType): Promise<Either<Error, void>> {
    this.logger.info({ input }, 'Created user with input')

    return right(undefined);
  }

  public async getAll(): Promise<Either<Error, PersonEntityType[]>> {
    const mockList: PersonEntityType[] = [
    ];

    return right(mockList);
  }
}
