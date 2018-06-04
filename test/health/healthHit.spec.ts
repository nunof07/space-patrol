import { Health } from '@src/health/Health';
import { healthHit } from '@src/health/healthHit';
import { expect } from 'chai';

function expectHealthShield(
    health: Health,
    healthVal: number,
    shieldVal: number
): void {
    expect(health.health).to.equal(healthVal);
    expect(health.shield).to.equal(shieldVal);
}

describe('health', () => {
    describe('#healthHit', () => {
        it('should take part of shield', () => {
            const health = healthHit({ health: 1, shield: 1 }, 50);
            expectHealthShield(health, 1, 0.5);
        });
        it('should take part of health and all shield', () => {
            const health = healthHit({ health: 1, shield: 1 }, 150);
            expectHealthShield(health, 0.5, 0);
        });
        it('should take part of health', () => {
            const health = healthHit({ health: 1, shield: 0 }, 50);
            expectHealthShield(health, 0.5, 0);
        });
        it('should take all health', () => {
            const health = healthHit({ health: 1, shield: 1 }, 500);
            expectHealthShield(health, 0, 0);
        });
    });
});
