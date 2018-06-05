import { flashSprite } from '@src/sprites/flashSprite';
import * as Phaser from 'phaser';

export function flashDamage(
    scene: Phaser.Scene,
    sprite: Phaser.GameObjects.Sprite,
    done: () => void
): void {
    flashSprite(scene, sprite, 2000, done);
}
