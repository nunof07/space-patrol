import { Position } from '@src/core/Position';
import * as Phaser from 'phaser';

export function healthBarPosition(parent: Phaser.GameObjects.Sprite): Position {
    return {
        x: parent.x,
        y: parent.y + parent.height * 0.5 * 1.6,
    };
}
