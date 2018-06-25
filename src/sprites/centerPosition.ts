import { Position } from '@src/core/Position';
import { startPosition } from '@src/sprites/startPosition';
import * as Phaser from 'phaser';

export function centerPosition(sprite: Phaser.GameObjects.Sprite): Position {
    const start = startPosition(sprite);

    return {
        x: start.x + sprite.displayWidth * 0.5,
        y: start.y + sprite.displayHeight * 0.5,
    };
}
