import * as Phaser from 'phaser';

function fillCamera(
    scene: Phaser.Scene,
    graphics: Phaser.GameObjects.Graphics,
    color: number
): void {
    graphics.fillStyle(color);
    graphics.fillRect(
        0,
        0,
        scene.cameras.main.width,
        scene.cameras.main.height
    );
}

function fadeInAndOut(
    scene: Phaser.Scene,
    graphics: Phaser.GameObjects.Graphics,
    done: () => void
): void {
    graphics.alpha = 0;
    scene.tweens.add({
        targets: graphics,
        alpha: 1,
        duration: 100,
        yoyo: true,
        ease: 'Quad.easeInOut',
        onComplete: done,
    });
}

export function flashDamage(
    scene: Phaser.Scene,
    sprite: Phaser.GameObjects.Sprite,
    done: () => void
): void {
    const graphics = scene.add.graphics();
    graphics.depth = 2000;
    fillCamera(scene, graphics, 0xffffff);
    graphics.mask = new Phaser.Display.Masks.BitmapMask(scene, sprite);
    fadeInAndOut(scene, graphics, () => {
        graphics.destroy();
        done();
    });
}
