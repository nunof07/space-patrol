import { title } from '@src/game/title';
import { expect } from 'chai';

describe('game', () => {
    describe('#title', () => {
        it('should return string', () => {
            expect(title()).to.be.a('string');
        });

        it('should return non-empty string', () => {
            expect(title()).to.have.length.greaterThan(0);
        });
    });
});
