import { Bullet } from '@src/weapons/Bullet';
import { BulletFactory } from '@src/weapons/BulletFactory';
import { Burst } from '@src/weapons/burst/Burst';
import { BurstLevel } from '@src/weapons/burst/BurstLevel';
import { createBullets } from '@src/weapons/createBullets';
import { Weapon } from '@src/weapons/Weapon';
import * as Phaser from 'phaser';

export class BurstFactory implements BulletFactory {
    private readonly scene: Phaser.Scene;
    private readonly level: BurstLevel;

    constructor(scene: Phaser.Scene, level: BurstLevel) {
        this.scene = scene;
        this.level = level;
    }

    public create(weapon: Weapon): ReadonlyArray<Bullet> {
        return createBullets(weapon, this.level.count, (index, sprite) => {
            const position = this.level.position(index, weapon);

            return new Burst(this.scene, sprite, position);
        });
    }
}
