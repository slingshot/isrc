/**
 * A list of possible errors thrown by the `validateISRC()` function.
 */
export enum ValidationErrors {
    /** Invalid length; thrown when the ISRC string is longer or shorter than 12 characters. */
    INVALID_LENGTH = 'Invalid length; ISRCs must be 12 characters long',

    /** Not alphanumeric; thrown when a non-alphanumeric character is present. */
    NOT_ALPHANUMERIC = 'Invalid characters; all ISRC characters must be alphanumeric',

    /** Country code not alpha; thrown when the country code (first 2 characters) contain non-alphabet characters. */
    COUNTRY_CODE_NOT_ALPHA = 'Invalid country code; all country codes must be 2 alphabet letters',

    /** Year not an integer; thrown when the year substring of the ISRC is NaN */
    YEAR_NOT_INT = 'Invalid year; the year must be a 2-digit number representing the year of assignment',

    /** Designation code not an integer; thrown when the designation code substring of the ISRC is NaN */
    DESIGNATION_CODE_NOT_INT = 'Invalid designation code; the designation code must be a 5-digit number with leading zeroes if relevant',
}
