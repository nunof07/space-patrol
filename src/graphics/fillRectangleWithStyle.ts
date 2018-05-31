import { RectangleWithStyle } from '@src/graphics/RectangleWithStyle';
import * as Phaser from 'phaser';

export function fillRectangleWithStyle(
    graphics: Phaser.GameObjects.Graphics,
    rect: RectangleWithStyle
): Phaser.GameObjects.Graphics {
    return graphics
        .lineStyle(rect.line.width, rect.line.color, rect.line.alpha)
        .strokeRectShape(rect.rectangle)
        .fillStyle(rect.fill.color, rect.fill.alpha)
        .fillRectShape(rect.rectangle);
}
