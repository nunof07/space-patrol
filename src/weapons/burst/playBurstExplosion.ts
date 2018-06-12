import { Position } from '@src/core/Position';
import { playAnimation } from '@src/sprites/playAnimation';
import * as Phaser from 'phaser';

export function playBurstExplosion(
    scene: Phaser.Scene,
    position: Position
): void {
    playAnimation(
        scene,
        {
            position,
            key: 'sprites',
            frame: 'player/burst_explosion_0001.png',
            depth: 1000,
        },
        'burstExplosion',
        sprite => {
            sprite.scaleX = 2;
            sprite.scaleY = 2;
            sprite.alpha = 0.65;
        }
    );
}
