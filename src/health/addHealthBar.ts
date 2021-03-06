import { centerRectangle } from '@src/graphics/centerRectangle';
import { RectangleWithStyle } from '@src/graphics/RectangleWithStyle';
import { HealthBar } from '@src/health/HealthBar';
import { healthBarPosition } from '@src/health/healthBarPosition';
import * as Phaser from 'phaser';

function rectangleWithStyle(
    rectangle: Phaser.Geom.Rectangle,
    color: number,
    lineWidth: number,
    fillAlpha: number = 1
): RectangleWithStyle {
    return {
        rectangle,
        fill: {
            color,
            alpha: fillAlpha,
        },
        line: {
            width: lineWidth,
            color,
        },
    };
}

export function addHealthBar(
    parent: Phaser.GameObjects.Sprite,
    widthPercentage: number = 1,
    height: number = 6,
    color: number = 0x22cc22
): HealthBar {
    const position = healthBarPosition(parent);
    const size = {
        width: parent.displayWidth * widthPercentage,
        height,
    };
    const filled = new Phaser.Geom.Rectangle(0, 0, size.width, size.height);
    centerRectangle(filled, position);
    const background = Phaser.Geom.Rectangle.Clone(filled);

    return {
        parent,
        background: rectangleWithStyle(background, 0xffffff, 0, 0.25),
        filled: rectangleWithStyle(filled, color, 0),
    };
}
