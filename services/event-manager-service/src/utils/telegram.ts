import { TelegramUpdateType, Roles } from '../contracts';
import { config } from '../config';

export const extractUsername = (input: TelegramUpdateType): string => {
  if (input.message !== undefined) {
    return input.message.from?.username ?? '';
  }

  if (input.edited_message !== undefined) {
    return input.edited_message.from?.username ?? '';
  }

  if (input.channel_post !== undefined) {
    return input.channel_post.from?.username ?? '';
  }

  if (input.edited_channel_post !== undefined) {
    return input.edited_channel_post.from?.username ?? '';
  }

  if (input.inline_query !== undefined) {
    return input.inline_query.from.username ?? '';
  }

  if (input.chosen_inline_result !== undefined) {
    return input.chosen_inline_result.from.username ?? '';
  }

  if (input.callback_query !== undefined) {
    return input.callback_query.from.username ?? '';
  }

  if (input.shipping_query !== undefined) {
    return input.shipping_query.from.username ?? '';
  }

  if (input.pre_checkout_query !== undefined) {
    return input.pre_checkout_query.from.username ?? '';
  }

  if (input.poll !== undefined) {
    return '';
  }

  if (input.poll_answer !== undefined) {
    return input.poll_answer.user.username ?? '';
  }

  return '';
};

export const getRoleByUsername = (username: string): Roles =>
  config.adminsUsernames.includes(username)
    ? Roles.Admin
    : Roles.Regular;
