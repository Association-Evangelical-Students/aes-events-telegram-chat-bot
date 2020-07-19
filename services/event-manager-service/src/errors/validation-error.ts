export class ValidationError extends Error {
  constructor(name?: string, message?: string) {
    super(name);
    this.name = name ?? 'validation error';
    this.message = message ?? '';
  }
}

export class TelegramApiInternalValidationError extends ValidationError {
  constructor(name?: string, message?: string) {
    super(name ?? 'telegram api internal validation error', message);
  }
}
