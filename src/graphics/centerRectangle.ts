import { Position } from '@src/core/Position';
import * as Phaser from 'phaser';

export function centerRectangle(
    rectangle: Phaser.Geom.Rectangle,
    position: Position
): Phaser.Geom.Rectangle {
    Phaser.Geom.Rectangle.CenterOn(rectangle, position.x, position.y);

    return rectangle;
}
