import { addHealthBar } from '@src/health/addHealthBar';
import { HealthBar } from '@src/health/HealthBar';
import * as Phaser from 'phaser';

export function addShieldBar(
    parent: Phaser.GameObjects.Sprite,
    widthPercentage: number = 1,
    height: number = 3,
    color: number = 0x2222ee
): HealthBar {
    return addHealthBar(parent, widthPercentage, height, color);
}
