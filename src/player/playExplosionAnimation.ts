import { Position } from '@src/core/Position';
import * as Phaser from 'phaser';

export function playExplosionAnimation(
    scene: Phaser.Scene,
    position: Position
): void {
    const explosion = scene.add.sprite(
        position.x,
        position.y,
        'sprites',
        'player/explosion_0001.png'
    );
    explosion.depth = 2000;
    explosion.play('playerExplosion');
    explosion.on('animationcomplete', () => {
        explosion.destroy();
    });
}
