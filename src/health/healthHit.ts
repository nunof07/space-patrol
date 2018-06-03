import { Health } from '@src/health/Health';

export function healthHit(health: Health, amount: number): Health {
    // assume shield and health are percetanges from 0 to 1
    // and amount is not a percentage, but a number from 0 to N

    // amount to be taken from shield
    const shieldAmount =
        amount > health.shield * 100 ? health.shield * 100 : amount;
    const newShield = health.shield * 100 - shieldAmount;

    // amount to be taken from health
    const healthAmount = amount - shieldAmount;
    const newHealth = Math.max(0, health.health * 100 - healthAmount);

    return {
        health: newHealth / 100,
        shield: newShield / 100,
    };
}
