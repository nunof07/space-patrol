import { isBulletAlive } from '@src/weapons/isBulletAlive';
import { expect } from 'chai';

describe('weapons', () => {
    describe('#isBulletAlive', () => {
        it('more than 0 should be alive', () => {
            expect(isBulletAlive({ lifespan: 10 })).to.equal(
                true,
                'Expected isBulletAlive to return true'
            );
        });
        it('0 should not be alive', () => {
            expect(isBulletAlive({ lifespan: 0 })).to.equal(
                false,
                'Expected isBulletAlive to return false when given 0 lifespan'
            );
        });
        it('less than 0 should not be alive', () => {
            expect(isBulletAlive({ lifespan: -10 })).to.equal(
                false,
                'Expected isBulletAlive to return false when given less than 0 lifespan'
            );
        });
    });
});
