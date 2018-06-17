import { Hitpoints } from '@src/health/Hitpoints';
import { incHitpoints } from '@src/health/incHitpoints';
import { expect } from 'chai';

describe('health', () => {
    describe('#incHitpoints', () => {
        it('should return max', () => {
            const result = incHitpoints(new Hitpoints(100, 100), 100);
            expect(result.current).to.equal(100);
        });
        it('should inc current', () => {
            const result = incHitpoints(new Hitpoints(100, 50), 10);
            expect(result.current).to.equal(60);
        });
    });
});
