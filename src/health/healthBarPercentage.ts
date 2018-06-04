import { HealthBar } from '@src/health/HealthBar';

export function healthBarPercentage(bar: HealthBar): number {
    return bar.filled.rectangle.width / bar.background.rectangle.width;
}
