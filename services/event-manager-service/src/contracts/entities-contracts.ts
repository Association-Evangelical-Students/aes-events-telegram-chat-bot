import {
  Number as TNumber,
  String as TString,
  Undefined as TUndefined,
  Record as TRecord,
  Array as TArray,
  Static,
} from 'runtypes';

export enum Roles {
  Admin = 'ADMIN',
  Regular = 'REGULAR',
}

export const PersonEntity = TRecord({
  telegramChatId: TNumber,
  telegramId: TNumber,
  firstName: TString,
  lastName:TString.Or(TUndefined),
  telegramUsername: TString.Or(TUndefined),
});
export type PersonEntityType = Static<typeof PersonEntity>;

export const EventEntity = TRecord({
  id: TString,
  title: TString,
  photoUrls: TArray(TString),
  description: TString,
  date: TString,
  participants: TArray(PersonEntity),
});
export type EventEntityType = Static<typeof EventEntity>;
