import { addAnimation } from '@src/animation/addAnimation';
import * as Phaser from 'phaser';

export function addBurstExplosion(scene: Phaser.Scene): void {
    addAnimation(scene, 'burstExplosion', 'player/burst_explosion_', 9);
}
