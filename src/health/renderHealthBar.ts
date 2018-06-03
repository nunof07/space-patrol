import { centerRectangle } from '@src/graphics/centerRectangle';
import { fillRectangleWithStyle } from '@src/graphics/fillRectangleWithStyle';
import { HealthBar } from '@src/health/HealthBar';
import { healthBarPosition } from '@src/health/healthBarPosition';
import * as Phaser from 'phaser';

export function renderHealthBar(
    graphics: Phaser.GameObjects.Graphics,
    bar: HealthBar,
    offset: number
): void {
    const position = healthBarPosition(bar.parent, offset);
    centerRectangle(bar.background.rectangle, position);
    centerRectangle(bar.filled.rectangle, position);
    bar.filled.rectangle.x = bar.background.rectangle.x;
    fillRectangleWithStyle(graphics, bar.background);
    fillRectangleWithStyle(graphics, bar.filled);
}
