import { ISRC } from '../src';

describe('stringify', () => {
    it('works', () => {
        expect(
            ISRC.stringify(new ISRC({
                countryCode: 'QZ',
                registrantCode: 'QHZ',
                year: 21,
                designationCode: 1,
            }))
        ).toEqual(
            'QZQHZ2100001'
        );
    });
});
