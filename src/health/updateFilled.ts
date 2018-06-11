import { Health } from '@src/health/Health';
import { updateHealthBarPercentage } from '@src/health/updateHealthBarPercentage';

export function updateFilled(health: Health): void {
    updateHealthBarPercentage(
        health.healthBar,
        health.vitality.health.percentage
    );
    updateHealthBarPercentage(
        health.shieldBar,
        health.vitality.shield.percentage
    );
}
