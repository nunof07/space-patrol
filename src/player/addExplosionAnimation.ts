import { addAnimation } from '@src/animation';
import * as Phaser from 'phaser';

export function addExplosionAnimation(scene: Phaser.Scene): void {
    addAnimation(scene, 'playerExplosion', 'player/explosion_', 15);
}
