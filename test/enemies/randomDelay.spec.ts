import { randomDelay } from '@src/enemies/randomDelay';
import { engine } from '@src/random/engine';
import { expect } from 'chai';

describe('enemies', () => {
    describe('#randomDelay', () => {
        it('should return integer', () => {
            expect(Number.isInteger(randomDelay(1, engine()).value)).to.equal(
                true,
                'Expected integer'
            );
        });
        it('should be greater than 0', () => {
            expect(randomDelay(1, engine()).value).to.be.greaterThan(0);
        });
    });
});
