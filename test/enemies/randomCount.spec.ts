import { randomCount } from '@src/enemies/randomCount';
import { engine } from '@src/random/engine';
import { expect } from 'chai';

describe('enemies', () => {
    describe('#randomCount', () => {
        it('should return integer', () => {
            expect(Number.isInteger(randomCount(1, engine(), 10, 20))).to.equal(
                true,
                'Expected integer'
            );
        });
        it('should be greater than 0', () => {
            expect(randomCount(1, engine(), 10, 20)).to.be.greaterThan(0);
        });
    });
});
