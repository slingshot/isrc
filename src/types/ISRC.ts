/**
 * An object representing a parsed ISRC code.
 */
export class ISRC {
    /** A 2-character code (A-Z only) based on country where the registrant’s home office is located (e.g. QZ) */
    countryCode: string;

    /** A 3-character alphanumeric code that identifies the Registrant within a National Agency (e.g. QHZ) */
    registrantCode: string;

    /** The 2-digit year in which the ISRC was assigned to the recording (e.g. 21) */
    year: number;

    /**
     * The code assigned to the sound recording by the registrant (e.g. 1).
     *
     * This library parses the code as a `number`. The designation code will be padded with zeroes if needed when stringifying the ISRC.
     * */
    designationCode: number;

    /**
     * The constructor for an {@link ISRC} object should receive all four attributes as an object. Generally, you'll probably instead use {@link ISRC.parse} to create a new ISRC object.
     * @param countryCode
     * @param registrantCode
     * @param year
     * @param designationCode
     */
    constructor({
        countryCode, registrantCode, year, designationCode,
    }: Partial<ISRC>) {
        this.countryCode = countryCode?.toUpperCase() ?? '';
        this.registrantCode = registrantCode?.toUpperCase() ?? '';
        this.year = year || 0;
        this.designationCode = designationCode || 0;
    }

    /**
     * Converts the current {@link ISRC} object to a full ISRC string.
     */
    toString = (): string => {
        let isrc = '';
        isrc += this.countryCode.toUpperCase();
        isrc += this.registrantCode.toUpperCase();
        isrc += this.year.toString(10).padStart(2, '0');
        isrc += this.designationCode.toString(10).padStart(5, '0');
        return isrc;
    };

    /**
     * Converts any {@link ISRC} object to a full ISRC string.
     * @param isrc - An {@link ISRC} object from this library.
     */
    static stringify = (isrc: ISRC): string => (new ISRC(isrc)).toString();

    /**
     * Parses a full ISRC string to an {@link ISRC} object.
     * @param isrcString - A full ISRC code as a string.
     */
    static parse = (isrcString: string): ISRC => new ISRC({
        countryCode: isrcString.substr(0, 2).toUpperCase(),
        registrantCode: isrcString.substr(2, 3).toUpperCase(),
        year: parseInt(isrcString.substr(5, 2), 10),
        designationCode: parseInt(isrcString.substr(7, 5), 10),
    });
}
