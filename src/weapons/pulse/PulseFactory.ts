import { Bullet } from '@src/weapons/Bullet';
import { BulletFactory } from '@src/weapons/BulletFactory';
import { createPulses } from '@src/weapons/pulse/createPulses';
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
        return createPulses(this.scene, this.level, weapon);
    }
}
