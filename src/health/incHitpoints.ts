import { Hitpoints } from '@src/health/Hitpoints';

export function incHitpoints(hitpoints: Hitpoints, amount: number): Hitpoints {
    return new Hitpoints(
        hitpoints.max,
        Math.min(hitpoints.max, hitpoints.current + amount)
    );
}
