import { endPosition } from '@src/sprites/endPosition';
import { startPosition } from '@src/sprites/startPosition';
import * as Phaser from 'phaser';

export function isOffCameraSides(
    scene: Phaser.Scene,
    sprite: Phaser.GameObjects.Sprite
): boolean {
    return (
        startPosition(sprite).x > scene.cameras.main.width ||
        endPosition(sprite).x < 0
    );
}
