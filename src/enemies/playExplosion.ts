import { Position } from '@src/core/Position';
import { playAnimation } from '@src/sprites/playAnimation';
import * as Phaser from 'phaser';

export function playExplosion(scene: Phaser.Scene, position: Position): void {
    playAnimation(
        scene,
        {
            position,
            key: 'sprites',
            frame: 'effects/explosion_0001.png',
            depth: 520,
        },
        'explosion'
    );
}
