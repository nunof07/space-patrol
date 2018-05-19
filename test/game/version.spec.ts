import { version } from '@src/game/version';
import { expect } from 'chai';

describe('game', () => {
    describe('#version', () => {
        it('should return string', () => {
            expect(version()).to.be.a('string');
        });

        it('should return non-empty string', () => {
            expect(version()).to.have.length.greaterThan(0);
        });
    });
});
