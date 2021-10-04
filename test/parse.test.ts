import { ISRC } from '../src';

describe('parse', () => {
    it('works', () => {
        expect(
            JSON.stringify(ISRC.parse('QZQHZ2100001'), null, 2)
        ).toEqual(
            JSON.stringify(new ISRC({
                countryCode: 'QZ',
                registrantCode: 'QHZ',
                year: 21,
                designationCode: 1,
            }), null, 2)
        );
    });
});
