import { Position } from '@src/core/Position';
import * as Phaser from 'phaser';

export function startPosition(sprite: Phaser.GameObjects.Sprite): Position {
    return {
        x: sprite.x - sprite.originX * sprite.displayWidth,
        y: sprite.y - sprite.originY * sprite.displayHeight,
    };
}
