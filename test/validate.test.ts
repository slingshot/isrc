import { validateISRC, ValidationErrors } from '../src';

describe('validate', () => {
    it('works', async () => {
        await expect(
            validateISRC('QZQHZ2100001')
        ).resolves;
        await expect(
            validateISRC('qzqhz2100001')
        ).resolves;
        await expect(
            validateISRC('Q2QHZ2100001')
        ).rejects.toThrow(ValidationErrors.COUNTRY_CODE_NOT_ALPHA);
        await expect(
            validateISRC('QZQHZ210000')
        ).rejects.toThrow(ValidationErrors.INVALID_LENGTH);
        await expect(
            validateISRC('QZQHZ21000001')
        ).rejects.toThrow(ValidationErrors.INVALID_LENGTH);
        await expect(
            validateISRC('QZQHZ2Z00001')
        ).rejects.toThrow(ValidationErrors.YEAR_NOT_INT);
        await expect(
            validateISRC('QZQHZ210000X')
        ).rejects.toThrow(ValidationErrors.DESIGNATION_CODE_NOT_INT);
        await expect(
            validateISRC('QZQZ2Z00001')
        ).rejects.toThrow(ValidationErrors.INVALID_LENGTH);
    });
});
