import { Health } from '@src/health/Health';
import { Hitpoints } from '@src/health/Hitpoints';

export function healthHit(health: Health, amount: number): Health {
    // amount to be taken from shield
    const shieldAmount =
        amount > health.shield.current ? health.shield.current : amount;
    const newShield = health.shield.current - shieldAmount;

    // amount to be taken from health
    const healthAmount = amount - shieldAmount;
    const newHealth = Math.max(0, health.health.current - healthAmount);

    return new Health(
        new Hitpoints(health.health.max, newHealth),
        new Hitpoints(health.shield.max, newShield)
    );
}
