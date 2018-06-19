import { fadeInAndOut } from '@src/graphics/fadeInAndOut';
import { fillCamera } from '@src/graphics/fillCamera';
import * as Phaser from 'phaser';

export function flashSprite(
    scene: Phaser.Scene,
    sprite: Phaser.GameObjects.Sprite,
    depth: number,
    done: () => void
): void {
    const graphics = scene.add.graphics();
    graphics.depth = depth;
    fillCamera(scene, graphics, 0xffffff);
    graphics.mask = new Phaser.Display.Masks.BitmapMask(scene, sprite);
    fadeInAndOut(scene, graphics, 100, () => {
        graphics.mask.destroy();
        graphics.clearMask(true);
        graphics.clear();
        graphics.destroy();
        done();
    });
}
