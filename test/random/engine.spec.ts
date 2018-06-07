import { engine } from '@src/random/engine';
import { expect } from 'chai';
import * as Random from 'random-js';

describe('random', () => {
    describe('#engine', () => {
        it('should not return null', () => {
            expect(engine()).to.be.not.equal(null, 'Expected non-null');
        });
        it('should return usable engine', () => {
            expect(Random.integer(1, 10)(engine())).to.be.greaterThan(0);
        });
    });
});
