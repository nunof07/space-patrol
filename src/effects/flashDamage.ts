import * as Phaser from 'phaser';

export function flashDamage(
    scene: Phaser.Scene,
    sprite: Phaser.GameObjects.Sprite,
    _depth: number,
    done: () => void = Phaser.Utils.NOOP
): void {
    sprite.alpha = 1;
    scene.tweens.add({
        targets: sprite,
        alpha: 0.5,
        duration: 100,
        yoyo: true,
        ease: 'Quad.easeInOut',
        onComplete: () => {
            sprite.alpha = 1;
            done();
        },
    });
}
