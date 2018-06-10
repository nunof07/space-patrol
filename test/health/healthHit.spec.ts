import { healthHit } from '@src/health/healthHit';
import { Hitpoints } from '@src/health/Hitpoints';
import { Vitality } from '@src/health/Vitality';
import { expect } from 'chai';

function newHealth(health: number, shield: number): Vitality {
    return new Vitality(new Hitpoints(100, health), new Hitpoints(100, shield));
}

function expectHealthShield(
    health: Vitality,
    healthVal: number,
    shieldVal: number
): void {
    expect(health.health.percentage).to.equal(healthVal);
    expect(health.shield.percentage).to.equal(shieldVal);
}

describe('health', () => {
    describe('#healthHit', () => {
        it('should take part of shield', () => {
            const health = healthHit(newHealth(100, 100), 50);
            expectHealthShield(health, 1, 0.5);
        });
        it('should take part of health and all shield', () => {
            const health = healthHit(newHealth(100, 100), 150);
            expectHealthShield(health, 0.5, 0);
        });
        it('should take part of health', () => {
            const health = healthHit(newHealth(100, 0), 50);
            expectHealthShield(health, 0.5, 0);
        });
        it('should take all health', () => {
            const health = healthHit(newHealth(100, 100), 500);
            expectHealthShield(health, 0, 0);
        });
    });
});
