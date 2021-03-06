import { Position } from '@src/core/Position';
import { playAnimation } from '@src/sprites/playAnimation';
import * as Phaser from 'phaser';

export function playExplosionAnimation(
    scene: Phaser.Scene,
    position: Position
): void {
    playAnimation(
        scene,
        {
            position,
            key: 'sprites',
            frame: 'player/explosion_0001.png',
            depth: 2000,
        },
        'playerExplosion'
    );
}
