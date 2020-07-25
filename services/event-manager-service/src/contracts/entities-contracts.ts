import {
  Number as TNumber,
  String as TString,
  Undefined as TUndefined,
  Record as TRecord,
  Array as TArray,
  Static,
} from 'runtypes';

export const PersonEntity = TRecord({
  id: TString,
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
  photoUrls: TArray(TString).Or(TUndefined),
  description: TString.Or(TUndefined),
  date: TString,
}).withBrand('EventEntity');
export type EventEntityType = Static<typeof EventEntity>;
