import { System } from '@src/core/System';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { BulletFactory } from '@src/weapons/BulletFactory';
import { PulseDynamicLevel } from '@src/weapons/pulse/PulseDynamicLevel';
import { UpgradableWeaponSystem } from '@src/weapons/UpgradableWeaponSystem';
import { WeaponComponent } from '@src/weapons/WeaponComponent';
import { WeaponSystem } from '@src/weapons/WeaponSystem';
import * as Phaser from 'phaser';

export class PulseSystem implements System, UpgradableWeaponSystem {
    private system: WeaponSystem;

    constructor(scene: Phaser.Scene, player: PlayerSystem) {
        this.system = new WeaponSystem(scene, player, {
            bulletFactory: new BulletFactory(scene, new PulseDynamicLevel()),
            group: { frame: 'player/bullet-primary.png', maxSize: 200 },
            triggerStep: 150,
            fireAudioKey: 'weapon_pulse_fire',
        });
    }

    public create(): void {
        this.system.create();
    }

    public update(time: number, delta: number): void {
        this.system.update(time, delta);
    }

    public upgrade(): boolean {
        return this.weaponComponent.factory.level.incLevel();
    }

    public get weaponComponent(): WeaponComponent {
        return this.system.weaponComponent;
    }
}
