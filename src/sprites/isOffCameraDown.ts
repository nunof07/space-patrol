import { startPosition } from '@src/sprites/startPosition';
import * as Phaser from 'phaser';

export function isOffCameraDown(
    scene: Phaser.Scene,
    sprite: Phaser.GameObjects.Sprite
): boolean {
    return startPosition(sprite).y > scene.cameras.main.height;
}
