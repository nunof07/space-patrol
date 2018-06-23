import { engine } from '@src/random/engine';
import { RandomInt } from '@src/random/RandomInt';
import { expect } from 'chai';

describe('random/RandomInt', () => {
    describe('#value', () => {
        it('should return integer', () => {
            expect(
                Number.isInteger(new RandomInt(engine(), 1, 10).value)
            ).to.equal(true, 'Expected integer');
        });
    });
});
