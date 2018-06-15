import { flashSprite } from '@src/sprites/flashSprite';
import * as Phaser from 'phaser';

export function flashDamage(
    scene: Phaser.Scene,
    sprite: Phaser.GameObjects.Sprite,
    depth: number,
    done: () => void = Phaser.Utils.NOOP
): void {
    flashSprite(scene, sprite, depth, done);
}
