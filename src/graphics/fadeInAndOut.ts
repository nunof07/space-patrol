import * as Phaser from 'phaser';

export function fadeInAndOut(
    scene: Phaser.Scene,
    graphics: Phaser.GameObjects.Graphics,
    duration: number = 100,
    done: () => void
): Phaser.Tweens.Tween {
    graphics.alpha = 0;

    return scene.tweens.add({
        targets: graphics,
        alpha: 1,
        duration,
        yoyo: true,
        ease: 'Quad.easeInOut',
        onComplete: done,
    });
}
