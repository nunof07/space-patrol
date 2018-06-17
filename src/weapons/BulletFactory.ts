import { Bullet } from '@src/weapons/Bullet';
import { createBullets } from '@src/weapons/createBullets';
import { Weapon } from '@src/weapons/Weapon';
import { WeaponLevel } from '@src/weapons/WeaponLevel';
import * as Phaser from 'phaser';

export class BulletFactory {
    private readonly scene: Phaser.Scene;
    private readonly levelImpl: WeaponLevel;

    constructor(scene: Phaser.Scene, level: WeaponLevel) {
        this.scene = scene;
        this.levelImpl = level;
    }

    public create(weapon: Weapon): ReadonlyArray<Bullet> {
        return createBullets(
            weapon,
            this.levelImpl.bulletsCount,
            (index, sprite) =>
                this.levelImpl.createBullet(this.scene, weapon, index, sprite)
        );
    }

    public get level(): WeaponLevel {
        return this.levelImpl;
    }
}
