import { noop } from '@src/core/noop';
import { Position } from '@src/core/Position';
import * as Phaser from 'phaser';

export function playAnimation(
    scene: Phaser.Scene,
    info: {
        readonly key: string;
        readonly frame: string;
        readonly depth: number;
        readonly position: Position;
    },
    animation: string,
    transform: (sprite: Phaser.GameObjects.Sprite) => void = noop
): void {
    const sprite = scene.add.sprite(
        info.position.x,
        info.position.y,
        info.key,
        info.frame
    );
    sprite.depth = info.depth;
    transform(sprite);
    sprite.play(animation);
    sprite.on('animationcomplete', () => {
        sprite.destroy();
    });
}
