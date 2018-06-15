import { Position } from '@src/core/Position';
import { playAnimation } from '@src/sprites/playAnimation';
import * as Phaser from 'phaser';

export function playCrateExplosion(
    scene: Phaser.Scene,
    position: Position
): void {
    playAnimation(
        scene,
        {
            position,
            key: 'sprites',
            frame: 'crates/smoke_plume_0001.png',
            depth: 520,
        },
        'crateExplosion',
        sprite => {
            sprite.scaleX = 0.6;
            sprite.scaleY = 0.6;
        }
    );
}
