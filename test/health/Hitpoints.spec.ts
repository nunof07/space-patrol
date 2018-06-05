import { Hitpoints } from '@src/health/Hitpoints';
import { expect } from 'chai';

describe('health/Hitpoints', () => {
    describe('#percentage', () => {
        it('should return 0', () => {
            expect(new Hitpoints(100, 0).percentage).to.equal(0);
        });
        it('should return 0.5', () => {
            expect(new Hitpoints(100, 50).percentage).to.equal(0.5);
        });
        it('should return 1', () => {
            expect(new Hitpoints(100, 100).percentage).to.equal(1);
        });
    });
});
