import { centerRectangle } from '@src/graphics/centerRectangle';
import { fillRectangleWithStyle } from '@src/graphics/fillRectangleWithStyle';
import { HealthBar } from '@src/healthBar/HealthBar';
import { healthBarPosition } from '@src/healthBar/healthBarPosition';
import * as Phaser from 'phaser';

export function renderHealthBar(
    graphics: Phaser.GameObjects.Graphics,
    bar: HealthBar
): void {
    const position = healthBarPosition(bar.parent);
    centerRectangle(bar.background.rectangle, position);
    centerRectangle(bar.filled.rectangle, position);
    bar.filled.rectangle.x = bar.background.rectangle.x;
    fillRectangleWithStyle(graphics, bar.background);
    fillRectangleWithStyle(graphics, bar.filled);
}
