import { ValidationError } from 'class-validator';

interface ValidationException {
  status: number;
  error: string;
  validation_errors: ErrorDescription[];
}

interface ErrorDescription {
  error: string;
  field: string;
  rejected_value?: string;
}

export class ValidationExceptionFactory implements ValidationException {
  public status: number;
  public error = 'validation';
  public validation_errors: ErrorDescription[];
  constructor(errors: ValidationError[], status = 400) {
    this.status = status;
    this.constructValidationErrors(errors);
  }

  private constructValidationErrors(errors: ValidationError[]): void {
    const validationErrors: ErrorDescription[] = errors.map(
      (error: ValidationError) => {
        return {
          error: Object.values(error.constraints)[0], // Only return the first for now
          field: error.property,
          rejected_value: error.value || undefined,
        };
      },
    );
    this.validation_errors = validationErrors;
  }
}
