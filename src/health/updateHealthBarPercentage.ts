import { HealthBar } from '@src/health/HealthBar';

export function updateHealthBarPercentage(
    bar: HealthBar,
    percentage: number
): HealthBar {
    bar.filled.rectangle.width = bar.background.rectangle.width * percentage;

    return bar;
}
