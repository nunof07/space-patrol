import { System } from '@src/core/System';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { addBurstExplosion } from '@src/weapons/burst/addBurstExplosion';
import { BurstDynamicLevel } from '@src/weapons/burst/BurstDynamicLevel';
import { BurstFactory } from '@src/weapons/burst/BurstFactory';
import { WeaponComponent } from '@src/weapons/WeaponComponent';
import { WeaponSystem } from '@src/weapons/WeaponSystem';
import * as Phaser from 'phaser';

export class BurstSystem implements System {
    private readonly scene: Phaser.Scene;
    private system: WeaponSystem;

    constructor(scene: Phaser.Scene, player: PlayerSystem) {
        this.scene = scene;
        this.system = new WeaponSystem(scene, player, {
            bulletFactory: new BurstFactory(
                this.scene,
                new BurstDynamicLevel()
            ),
            group: { frame: 'player/bullet-burst.png', maxSize: 30 },
            triggerStep: 1000,
        });
    }

    public create(): void {
        addBurstExplosion(this.scene);
        this.system.create();
    }

    public update(time: number, delta: number): void {
        this.system.update(time, delta);
    }

    public get weaponComponent(): WeaponComponent {
        return this.system.weaponComponent;
    }
}
