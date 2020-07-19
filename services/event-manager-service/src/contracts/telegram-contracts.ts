import {
  Boolean as TBoolean,
  Number as TNumber,
  String as TString,
  Undefined as TUndefined,
  Literal as TLiteral,
  Record as TRecord,
  Array as TArray,
  Union as TUnion,
  Static,
  Literal,
} from 'runtypes';

// Available Types

/* *** LoginUrl: start *** */
export const TLoginUrl = TRecord({
  url: TString,
  forwardText: TString.Or(TUndefined),
  botUsername: TString.Or(TUndefined),
  requestWriteAccess: TBoolean.Or(TUndefined),
});
export type TLoginUrlType = Static<typeof TLoginUrl>;

export const LoginUrl = TRecord({
  url: TString,
  forward_text: TString.Or(TUndefined),
  bot_username: TString.Or(TUndefined),
  request_write_access: TBoolean.Or(TUndefined),
});
export type LoginUrlType = Static<typeof LoginUrl>;
/* *** LoginUrl: end *** */

/* *** InlineKeyboardButton: start *** */
export const TInlineKeyboardButton = TRecord({
  text: TString,
  url: TString.Or(TUndefined),
  loginUrl: TLoginUrl.Or(TUndefined),
  callbackData: TString.Or(TUndefined),
  switchInlineQuery: TString.Or(TUndefined),
  switchInlineQueryCurrentChat: TString.Or(TUndefined),
  // callbackGame: TString.Or(TUndefined), it is optional field and we do not use it
  pay: TBoolean.Or(TUndefined),
});
export type TInlineKeyboardButtonType = Static<typeof TInlineKeyboardButton>;

export const InlineKeyboardButton = TRecord({
  text: TString,
  url: TString.Or(TUndefined),
  login_url: LoginUrl.Or(TUndefined),
  callback_data: TString.Or(TUndefined),
  switch_inline_query: TString.Or(TUndefined),
  switch_inline_query_current_chat: TString.Or(TUndefined),
  // callback_game: TString.Or(TUndefined), it is optional field and we do not use it
  pay: TBoolean.Or(TUndefined),
});
export type InlineKeyboardButtonType = Static<typeof InlineKeyboardButton>;
/* *** InlineKeyboardButton: end *** */

/* *** InlineKeyboardMarkup: start *** */
export const TInlineKeyboardMarkup = TRecord({
  inlineKeyboard: TArray(TInlineKeyboardButton),
});
export type TInlineKeyboardMarkupType = Static<typeof TInlineKeyboardMarkup>;

export const InlineKeyboardMarkup = TRecord({
  inline_keyboard: TArray(InlineKeyboardButton),
});
export type InlineKeyboardMarkupType = Static<typeof InlineKeyboardMarkup>;
/* *** InlineKeyboardMarkup: end *** */

/* *** KeyboardButtonPollType: start *** */
export const TKeyboardButtonPollType = TRecord({
  type: TString.Or(TUndefined),
});
export type TKeyboardButtonPollTypeType = Static<typeof TKeyboardButtonPollType>;

export const KeyboardButtonPollType = TRecord({
  type: TString.Or(TUndefined),
});
export type KeyboardButtonPollTypeType = Static<typeof KeyboardButtonPollType>;
/* *** KeyboardButtonPollType: end *** */

/* *** KeyboardButton: start *** */
export const TKeyboardButton = TRecord({
  text: TString,
  requestContact: TBoolean.Or(TUndefined),
  requestLocation: TBoolean.Or(TUndefined),
  requestPoll: TKeyboardButtonPollType.Or(TUndefined),
});
export type TKeyboardButtonType = Static<typeof TKeyboardButton>;

export const KeyboardButton = TRecord({
  text: TString,
  request_contact: TBoolean.Or(TUndefined),
  request_location: TBoolean.Or(TUndefined),
  request_poll: KeyboardButtonPollType.Or(TUndefined),
});
export type KeyboardButtonType = Static<typeof KeyboardButton>;
/* *** KeyboardButton: end *** */

/* *** ReplyKeyboardMarkup: start *** */
export const TReplyKeyboardMarkup = TRecord({
  keyboard: TArray(TKeyboardButton),
  resizeKeyboard: TBoolean.Or(TUndefined),
  oneTimeKeyboard: TBoolean.Or(TUndefined),
  selective: TBoolean.Or(TUndefined),
});
export type TReplyKeyboardMarkupType = Static<typeof TReplyKeyboardMarkup>;

export const ReplyKeyboardMarkup = TRecord({
  keyboard: TArray(TKeyboardButton),
  resize_keyboard: TBoolean.Or(TUndefined),
  one_time_keyboard: TBoolean.Or(TUndefined),
  selective: TBoolean.Or(TUndefined),
});
export type ReplyKeyboardMarkupType = Static<typeof ReplyKeyboardMarkup>;
/* *** ReplyKeyboardMarkup: end *** */

/* *** ReplyKeyboardRemove: start *** */
export const TReplyKeyboardRemove = TRecord({
  removeKeyboard: Literal(true),
  selective: TBoolean.Or(TUndefined),
});
export type TReplyKeyboardRemoveType = Static<typeof TReplyKeyboardRemove>;

export const ReplyKeyboardRemove = TRecord({
  remove_keyboard: Literal(true),
  selective: TBoolean.Or(TUndefined),
});
export type ReplyKeyboardRemoveType = Static<typeof ReplyKeyboardRemove>;
/* *** ReplyKeyboardRemove: end *** */

/* *** ForceReply: start *** */
export const TForceReply = TRecord({
  forceReply: Literal(true),
  selective: TBoolean.Or(TUndefined),
});
export type TForceReplyType = Static<typeof TForceReply>;

export const ForceReply = TRecord({
  force_reply: Literal(true),
  selective: TBoolean.Or(TUndefined),
});
export type ForceReplyType = Static<typeof ForceReply>;
/* *** ForceReply: end *** */

export const TelegramUser = TRecord({
  id: TNumber,
  is_bot: TBoolean,
  first_name: TString,
  last_name: TString.Or(TUndefined),
  username: TString.Or(TUndefined),
  language_code: TString.Or(TUndefined),
  can_join_groups: TBoolean.Or(TUndefined),
  can_read_all_group_messages: TBoolean.Or(TUndefined),
  supports_inline_queries: TBoolean.Or(TUndefined),
});
export type TelegramUserType = Static<typeof TelegramUser>;

// Permission Types
export const TelegramChatPermissions = TRecord({
  can_send_messages: TBoolean.Or(TUndefined),
  can_send_media_messages: TBoolean.Or(TUndefined),
  can_send_polls: TBoolean.Or(TUndefined),
  can_send_other_messages: TBoolean.Or(TUndefined),
  can_add_web_page_previews: TBoolean.Or(TUndefined),
  can_change_info: TBoolean.Or(TUndefined),
  can_invite_users: TBoolean.Or(TUndefined),
  can_pin_messages: TBoolean.Or(TUndefined),
});
export type TelegramChatPermissionsType = Static<typeof TelegramChatPermissions>;

export const TelegramChat = TRecord({
  id: TNumber,
  type: TUnion(TLiteral('private'), TLiteral('group'), TLiteral('supergroup'), TLiteral('channel')),
  title: TString.Or(TUndefined),
  username: TString.Or(TUndefined),
  first_name: TString.Or(TUndefined),
  last_name: TString.Or(TUndefined),
  photo: TString.Or(TUndefined),
  description: TString.Or(TUndefined),
  invite_link: TString.Or(TUndefined),
  pinned_message: TString.Or(TUndefined),
  permissions: TelegramChatPermissions.Or(TUndefined),
  slow_mode_delay: TNumber.Or(TUndefined),
  sticker_set_name: TString.Or(TUndefined),
  can_set_sticker_set: TBoolean.Or(TUndefined),
});
export type TelegramChatType = Static<typeof TelegramChat>;

/* *** TelegramMessageEntity *** */
export const TelegramMessageEntity = TRecord({
  type: TString,
  offset: TNumber,
  length: TNumber,
  url: TString.Or(TUndefined),
  user: TelegramUser.Or(TUndefined),
  language: TString,
});
export type TelegramMessageEntityType = Static<typeof TelegramMessageEntity>;
/* *** TelegramMessageEntity: end *** */

/* *** TelegramPhotoSize *** */
export const TelegramPhotoSize = TRecord({
  file_id: TString,
  file_unique_id: TString,
  width: TNumber,
  height: TNumber,
  file_size: TNumber.Or(TUndefined),
});
export type TelegramPhotoSizeType = Static<typeof TelegramPhotoSize>;
/* *** TelegramMessageEntity: end *** */

/* *** TelegramAnimation *** */
export const TelegramAnimation = TRecord({
  file_id: TString,
  file_unique_id: TString,
  width: TNumber,
  height: TNumber,
  duration: TNumber,
  thumb: TelegramPhotoSize.Or(TUndefined),
  file_name: TString.Or(TUndefined),
  mime_type: TString.Or(TUndefined),
  file_size: TNumber.Or(TUndefined),
});
export type TelegramAnimationType = Static<typeof TelegramAnimation>;
/* *** TelegramAnimation: end *** */

/* *** TelegramAudio *** */
export const TelegramAudio = TRecord({
  file_id: TString,
  file_unique_id: TString,
  duration: TNumber,
  performer: TString.Or(TUndefined),
  title: TString.Or(TUndefined),
  mime_type: TString.Or(TUndefined),
  file_size: TNumber.Or(TUndefined),
  thumb: TelegramPhotoSize.Or(TUndefined),
});
export type TelegramAudioType = Static<typeof TelegramAudio>;
/* *** TelegramAudio: end *** */

/* *** TelegramDocument *** */
export const TelegramDocument = TRecord({
  file_id: TString,
  file_unique_id: TString,
  thumb: TelegramPhotoSize.Or(TUndefined),
  file_name: TString.Or(TUndefined),
  mime_type: TString.Or(TUndefined),
  file_size: TNumber.Or(TUndefined),
});
export type TelegramDocumentType = Static<typeof TelegramDocument>;
/* *** TelegramDocument: end *** */

/* *** TelegramMaskPosition *** */
export const TelegramMaskPosition = TRecord({
  point: TString,
  x_shift: TNumber,
  y_shift: TNumber,
  scale: TNumber,
});
export type TelegramMaskPositionType = Static<typeof TelegramMaskPosition>;
/* *** TelegramMaskPosition: end *** */

/* *** TelegramSticker *** */
export const TelegramSticker = TRecord({
  file_id: TString,
  file_unique_id: TString,
  width: TNumber,
  height: TNumber,
  is_animated: TBoolean,
  thumb: TelegramPhotoSize.Or(TUndefined),
  emoji: TString.Or(TUndefined),
  set_name: TString.Or(TUndefined),
  mask_position: TelegramMaskPosition.Or(TUndefined),
  file_size: TNumber.Or(TUndefined),
});
export type TelegramStickerType = Static<typeof TelegramSticker>;
/* *** TelegramSticker: end *** */

/* *** TelegramVideo *** */
export const TelegramVideo = TRecord({
  file_id: TString,
  file_unique_id: TString,
  width: TNumber,
  height: TNumber,
  duration: TNumber,
  thumb: TelegramPhotoSize.Or(TUndefined),
  mime_type: TString.Or(TUndefined),
  file_size: TNumber.Or(TUndefined),
});
export type TelegramVideoType = Static<typeof TelegramVideo>;
/* *** TelegramVideo: end *** */

/* *** TelegramVideoNote *** */
export const TelegramVideoNote = TRecord({
  file_id: TString,
  file_unique_id: TString,
  length: TNumber,
  duration: TNumber,
  thumb: TelegramPhotoSize.Or(TUndefined),
  file_size: TNumber.Or(TUndefined),
});
export type TelegramVideoNoteType = Static<typeof TelegramVideoNote>;
/* *** TelegramVideoNote: end *** */

/* *** TelegramVoice *** */
export const TelegramVoice = TRecord({
  file_id: TString,
  file_unique_id: TString,
  duration: TNumber,
  mime_type: TString.Or(TUndefined),
  file_size: TNumber.Or(TUndefined),
});
export type TelegramVoiceType = Static<typeof TelegramVoice>;
/* *** TelegramVoice: end *** */

/* *** TelegramContact *** */
export const TelegramContact = TRecord({
  phone_number: TString,
  first_name: TString,
  last_name: TString.Or(TUndefined),
  user_id: TNumber.Or(TUndefined),
  vcard: TString.Or(TUndefined),
});
export type TelegramContactType = Static<typeof TelegramContact>;
/* *** TelegramContact: end *** */

/* *** TelegramDice *** */
export const TelegramDice = TRecord({
  emoji: TString,
  value: TNumber,
});
export type TelegramDiceType = Static<typeof TelegramDice>;
/* *** TelegramDice: end *** */

/* *** TelegramGame *** */
export const TelegramGame = TRecord({
  title: TString,
  description: TString,
  photo: TArray(TelegramPhotoSize),
  text: TString.Or(TUndefined),
  text_entities: TArray(TelegramMessageEntity).Or(TUndefined),
  animation: TelegramAnimation.Or(TUndefined),
});
export type TelegramGameType = Static<typeof TelegramGame>;
/* *** TelegramGame: end *** */

/* *** TelegramPollOption *** */
export const TelegramPollOption = TRecord({
  text: TString,
  voter_count: TNumber,
});
export type TelegramPollOptionType = Static<typeof TelegramPollOption>;
/* *** TelegramGame: end *** */

/* *** TelegramPoll *** */
export const TelegramPoll = TRecord({
  id: TString,
  question: TString,
  options: TArray(TelegramPollOption),
  total_voter_count: TNumber,
  is_closed: TBoolean,
  is_anonymous: TBoolean,
  type: TString,
  allows_multiple_answers: TBoolean,
  correct_option_id: TNumber.Or(TUndefined),
  explanation: TString.Or(TUndefined),
  explanation_entities: TArray(TelegramMessageEntity).Or(TUndefined),
  open_period: TNumber.Or(TUndefined),
  close_date: TNumber.Or(TUndefined),
});
export type TelegramPollType = Static<typeof TelegramPoll>;
/* *** TelegramGame: end *** */

/* *** TelegramLocation *** */
export const TelegramLocation = TRecord({
  longitude: TNumber,
  latitude: TNumber,
});
export type TelegramLocationType = Static<typeof TelegramLocation>;
/* *** TelegramLocation: end *** */

/* *** TelegramVenue *** */
export const TelegramVenue = TRecord({
  location: TelegramLocation,
  title: TString,
  address: TString,
  foursquare_id: TString.Or(TUndefined),
  foursquare_type: TString.Or(TUndefined),
});
export type TelegramVenueType = Static<typeof TelegramVenue>;
/* *** TelegramVenue: end *** */

/* *** TelegramInvoice *** */
export const TelegramInvoice = TRecord({
  title: TString,
  description: TString,
  start_parameter: TString,
  currency: TString,
  total_amount: TNumber,
});
export type TelegramInvoiceType = Static<typeof TelegramInvoice>;
/* *** TelegramInvoice: end *** */

/* *** TelegramShippingAddress *** */
export const TelegramShippingAddress = TRecord({
  country_code: TString,
  state: TString,
  city: TString,
  street_line1: TString,
  street_line2: TString,
  post_code: TString,
});
export type TelegramShippingAddressType = Static<typeof TelegramShippingAddress>;
/* *** TelegramShippingAddress: end *** */

/* *** TelegramOrderInfo *** */
export const TelegramOrderInfo = TRecord({
  name: TString.Or(TUndefined),
  phone_number: TString.Or(TUndefined),
  email: TString.Or(TUndefined),
  shipping_address: TelegramShippingAddress.Or(TUndefined),
});
export type TelegramOrderInfoType = Static<typeof TelegramOrderInfo>;
/* *** TelegramOrderInfo: end *** */

/* *** TelegramSuccessfulPayment *** */
export const TelegramSuccessfulPayment = TRecord({
  currency: TString,
  total_amount: TNumber,
  invoice_payload: TString,
  shipping_option_id: TString.Or(TUndefined),
  order_info: TelegramOrderInfo.Or(TUndefined),
  telegram_payment_charge_id: TString,
  provider_payment_charge_id: TString,
});
export type TelegramSuccessfulPaymentType = Static<typeof TelegramSuccessfulPayment>;
/* *** TelegramSuccessfulPayment: end *** */

/* *** TelegramPassportFile *** */
export const TelegramPassportFile = TRecord({
  file_id: TString,
  file_unique_id: TString,
  file_size: TNumber,
  file_date: TNumber,
});
export type TelegramPassportFileType = Static<typeof TelegramPassportFile>;
/* *** TelegramPassportFile: end *** */

/* *** TelegramEncryptedPassportElement *** */
export const TelegramEncryptedPassportElement = TRecord({
  type: TString,
  data: TString,
  phone_number: TString.Or(TUndefined),
  email: TString.Or(TUndefined),
  files: TArray(TelegramPassportFile).Or(TUndefined),
  front_side: TelegramPassportFile.Or(TUndefined),
  reverse_side: TelegramPassportFile.Or(TUndefined),
  translation: TArray(TelegramPassportFile).Or(TUndefined),
  hash: TString,
});
export type TelegramEncryptedPassportElementType = Static<typeof TelegramEncryptedPassportElement>;
/* *** TelegramEncryptedPassportElement: end *** */

/* *** TelegramEncryptedCredentials *** */
export const TelegramEncryptedCredentials = TRecord({
  data: TString,
  hash: TString,
  secret: TString,
});
export type TelegramEncryptedCredentialsType = Static<typeof TelegramEncryptedCredentials>;
/* *** TelegramEncryptedCredentials: end *** */

/* *** TelegramPassportData *** */
export const TelegramPassportData = TRecord({
  data: TArray(TelegramEncryptedPassportElement),
  credentials: TelegramEncryptedCredentials,
});
export type TelegramPassportDataType = Static<typeof TelegramPassportData>;
/* *** TelegramPassportData: end *** */

/* *** TelegramMessage *** */
export const TelegramMessage = TRecord({
  message_id: TNumber,
  date: TNumber,
  chat: TelegramChat,
  forward_from: TelegramUser.Or(TUndefined),
  forward_from_chat: TelegramChat.Or(TUndefined),
  forward_from_message_id: TNumber.Or(TUndefined),
  forward_signature: TString.Or(TUndefined),
  forward_sender_name: TString.Or(TUndefined),
  forward_date: TNumber.Or(TUndefined),
  // reply_to_message: TelegramMessage.Or(TUndefined),
  via_bot: TelegramUser.Or(TUndefined),
  edit_date: TNumber.Or(TUndefined),
  media_group_id: TString.Or(TUndefined),
  author_signature: TString.Or(TUndefined),
  text: TString,
  entities: TArray(TelegramMessageEntity).Or(TUndefined),
  animation: TelegramAnimation.Or(TUndefined),
  audio: TelegramAudio.Or(TUndefined),
  document: TelegramDocument.Or(TUndefined),
  photo: TArray(TelegramPhotoSize).Or(TUndefined),
  sticker: TelegramSticker.Or(TUndefined),
  video: TelegramVideo.Or(TUndefined),
  video_note: TelegramVideoNote.Or(TUndefined),
  voice: TelegramVoice.Or(TUndefined),
  caption: TString.Or(TUndefined),
  caption_entities: TArray(TelegramMessageEntity).Or(TUndefined),
  contact: TelegramContact.Or(TUndefined),
  dice: TelegramDice.Or(TUndefined),
  game: TelegramGame.Or(TUndefined),
  pool: TelegramPoll.Or(TUndefined),
  venue: TelegramVenue.Or(TUndefined),
  location: TelegramLocation.Or(TUndefined),
  new_chat_members: TArray(TelegramUser).Or(TUndefined),
  left_chat_member: TelegramUser.Or(TUndefined),
  new_chat_title: TString.Or(TUndefined),
  new_chat_photo: TArray(TelegramPhotoSize).Or(TUndefined),
  delete_chat_photo: Literal(true).Or(TUndefined),
  group_chat_created: Literal(true).Or(TUndefined),
  supergroup_chat_created: Literal(true).Or(TUndefined),
  channel_chat_created: Literal(true).Or(TUndefined),
  migrate_to_chat_id: TNumber.Or(TUndefined),
  migrate_from_chat_id: TNumber.Or(TUndefined),
  // pinned_message: TelegramMessage.Or(TUndefined),
  invoice: TelegramInvoice.Or(TUndefined),
  successful_payment: TelegramSuccessfulPayment.Or(TUndefined),
  connected_website: TString.Or(TUndefined),
  passport_data: TelegramPassportData.Or(TUndefined),
  reply_markup: InlineKeyboardMarkup.Or(TUndefined),
});
export type TelegramMessageType = Static<typeof TelegramMessage>;
/* *** TelegramMessage: end *** */

// Available Method's Types

/* *** SendMessageOptions: start *** */
export const TSendMessageReplyMarkup = TUnion(
  TInlineKeyboardMarkup,
  TReplyKeyboardMarkup,
  TReplyKeyboardRemove,
  TForceReply,
);
export type TSendMessageReplyMarkupType = Static<typeof TSendMessageReplyMarkup>;

export const TSendMessageOptions = TRecord({
  chatId: TUnion(TNumber, TString),
  text: TString, // max length 4096
  parseMode: TString.Or(TUndefined),
  disableWebPagePreview: TBoolean.Or(TUndefined),
  disableNotification: TBoolean.Or(TUndefined),
  replyToMessageId: TNumber.Or(TUndefined),
  replyMarkup: TSendMessageReplyMarkup.Or(TUndefined),
});
export type TSendMessageOptionsType = Static<typeof TSendMessageOptions>;

export const SendMessageReplyMarkup = TUnion(
  InlineKeyboardMarkup,
  ReplyKeyboardMarkup,
  ReplyKeyboardRemove,
  ForceReply,
);
export type SendMessageReplyMarkupType = Static<typeof SendMessageReplyMarkup>;

export const SendMessageOptions = TRecord({
  chat_id: TUnion(TNumber, TString),
  text: TString, // max length 4096
  parse_mode: TString.Or(TUndefined),
  disable_web_page_preview: TBoolean.Or(TUndefined),
  disable_notification: TBoolean.Or(TUndefined),
  reply_to_message_id: TNumber.Or(TUndefined),
  reply_markup: SendMessageReplyMarkup.Or(TUndefined),
});
export type SendMessageOptionsType = Static<typeof SendMessageOptions>;
/* *** SendMessageOptions: end *** */

/* *** TelegramUpdate *** */
export const TelegramUpdate = TRecord({
  update_id: TNumber,
  message: TelegramMessage.Or(TUndefined),
});
export type TelegramUpdateType = Static<typeof TelegramUpdate>;
/* *** TelegramUpdate: end *** */
