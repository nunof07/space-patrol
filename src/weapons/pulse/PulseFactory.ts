import { Bullet } from '@src/weapons/Bullet';
import { BulletFactory } from '@src/weapons/BulletFactory';
import { createBullets } from '@src/weapons/createBullets';
import { Pulse } from '@src/weapons/pulse/Pulse';
import { PulseLevel } from '@src/weapons/pulse/PulseLevel';
import { Weapon } from '@src/weapons/Weapon';
import * as Phaser from 'phaser';

export class PulseFactory implements BulletFactory {
    private readonly scene: Phaser.Scene;
    private readonly level: PulseLevel;

    constructor(scene: Phaser.Scene, level: PulseLevel) {
        this.scene = scene;
        this.level = level;
    }

    public create(weapon: Weapon): ReadonlyArray<Bullet> {
        return createBullets(weapon, this.level.count, (index, sprite) => {
            const position = this.level.position(index, weapon);
            const angle = this.level.angle(index, weapon);

            return new Pulse(this.scene, sprite, position, angle);
        });
    }
}
