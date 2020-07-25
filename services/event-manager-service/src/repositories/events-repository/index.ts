import { Either, right } from '@sweet-monads/either';
import { EventEntityType } from '../../contracts';

export interface IEventsRepository {
  createOne(input: EventEntityType): Promise<Either<Error, void>>;
  attachParticipant(eventId: string, personTelegramId: string): Promise<Either<Error, void>>;
  unattachParticipant(eventId: string, personTelegramId: string): Promise<Either<Error, void>>;
  getAll(): Promise<Either<Error, EventEntityType[]>>;
}

export class EventsRepository implements IEventsRepository {
  public async createOne(input: EventEntityType): Promise<Either<Error, void>> {
    return right(undefined);
  }

  public async attachParticipant(eventId: string, personTelegramId: string): Promise<Either<Error, void>> {
    return right(undefined);
  }

  public async unattachParticipant(eventId: string, personTelegramId: string): Promise<Either<Error, void>> {
    return right(undefined);
  }

  public async getAll(): Promise<Either<Error, EventEntityType[]>> {
    const mockList = [
      {
        id: '1',
        title: 'EventTitle1',
        photoUrls: [],
        description: 'Some description for EventTitle1',
        date: new Date().toISOString(),
        participants: [],
      },
      {
        id: '2',
        title: 'EventTitle2',
        photoUrls: [],
        description: 'Some description for EventTitle2',
        date: new Date().toISOString(),
        participants: [],
      },
      {
        id: '3',
        title: 'EventTitle3',
        photoUrls: [],
        description: 'Some description for EventTitle3',
        date: new Date().toISOString(),
        participants: [],
      },
    ];

    return right(mockList as EventEntityType[]);
  }
}
