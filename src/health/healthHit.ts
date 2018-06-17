import { Hitpoints } from '@src/health/Hitpoints';
import { Vitality } from '@src/health/Vitality';

export function healthHit(vitality: Vitality, amount: number): Vitality {
    let newHealth: number = vitality.health.current;
    let newShield: number = vitality.shield.current;

    if (vitality.shield.current > 0) {
        newShield = Math.max(0, vitality.shield.current - amount);
    } else {
        newHealth = Math.max(0, vitality.health.current - amount);
    }

    return new Vitality(
        new Hitpoints(vitality.health.max, newHealth),
        new Hitpoints(vitality.shield.max, newShield)
    );
}
