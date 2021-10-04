import { ValidationErrors } from './types';

/**
 * Validates a full ISRC code (passed in a string). Resolves if valid. If invalid, throws an error with the reason.
 *
 * *NOTE: This function validates the ISRC code's format, but does not currently validate against a list of valid country codes. Will likely add this functionality in a future release.*
 * @param isrcString - The full ISRC code as a string.
 */
export const validateISRC = async (isrcString: string): Promise<void> => {
    if (isrcString.length !== 12) throw new Error(ValidationErrors.INVALID_LENGTH);
    if (!(/^\w+$/.test(isrcString))) throw new Error(ValidationErrors.NOT_ALPHANUMERIC);
    if (!(/^[A-Za-z]+$/.test(isrcString.substr(0, 2)))) throw new Error(ValidationErrors.COUNTRY_CODE_NOT_ALPHA);
    if (Number.isNaN(Number(isrcString.substr(5, 2)))) throw new Error(ValidationErrors.YEAR_NOT_INT);
    if (Number.isNaN(Number(isrcString.substr(7, 5)))) throw new Error(ValidationErrors.DESIGNATION_CODE_NOT_INT);
    // eslint-disable-next-line no-useless-return
    return;
};
