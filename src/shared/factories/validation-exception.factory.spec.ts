import { ValidationExceptionFactory } from './validation-exception.factory';
import { ValidationError } from 'class-validator';

describe('ValidationExceptionFactory', () => {
  it('should create a validation error response with 1 error', () => {
    const validationError = new ValidationError();
    validationError.target = {};
    validationError.property = 'username';
    validationError.constraints = { isNotEmpty: 'username.empty' };

    const expectedResult = {
      error: 'validation',
      status: 400,
      validation_errors: [
        {
          error: 'username.empty',
          field: 'username',
        },
      ],
    };
    const value = new ValidationExceptionFactory([validationError]);
    expect(value).toEqual(expectedResult);
  });

  it('should create a validation error response with 2 errors', () => {
    const firstValidationError = new ValidationError();
    firstValidationError.target = {};
    firstValidationError.property = 'username';
    firstValidationError.constraints = { isNotEmpty: 'username.empty' };

    const secondValidationError = new ValidationError();
    secondValidationError.target = {};
    secondValidationError.property = 'password';
    secondValidationError.constraints = { isNotEmpty: 'password.empty' };

    const expectedResult = {
      error: 'validation',
      status: 400,
      validation_errors: [
        {
          error: 'username.empty',
          field: 'username',
        },
        {
          error: 'password.empty',
          field: 'password',
        },
      ],
    };
    const value = new ValidationExceptionFactory([
      firstValidationError,
      secondValidationError,
    ]);
    expect(value).toEqual(expectedResult);
  });
});
