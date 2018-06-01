import { Position } from '@src/core/Position';
import * as Phaser from 'phaser';

export function healthBarPosition(
    parent: Phaser.GameObjects.Sprite,
    offset: number = 1.6
): Position {
    return {
        x: parent.x,
        y: parent.y + parent.height * 0.5 * offset,
    };
}
