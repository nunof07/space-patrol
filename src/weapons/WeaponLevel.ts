import { Bullet } from '@src/weapons/Bullet';
import { Weapon } from '@src/weapons/Weapon';
import * as Phaser from 'phaser';

export interface WeaponLevel {
    readonly currentLevel: number;
    readonly bulletsCount: number;
    incLevel(): void;
    createBullet(
        scene: Phaser.Scene,
        weapon: Weapon,
        index: number,
        sprite: Phaser.GameObjects.Sprite
    ): Bullet;
}
