import { config } from '@src/game/config';
import { expect } from 'chai';

describe('game', () => {
    describe('#config', () => {
        it('should not be null', () => {
            expect(config()).to.not.equal(null, 'Expected non-null value');
        });
        it('should not be undefined', () => {
            expect(config()).to.not.equal(undefined, 'Expected a value');
        });
        it('should be an object', () => {
            expect(config()).to.be.an('object');
        });
    });
});
