import { System } from '@src/core/System';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { PulseFactory } from '@src/weapons/pulse/PulseFactory';
import { PulseLevel1 } from '@src/weapons/pulse/PulseLevel1';
import { WeaponComponent } from '@src/weapons/WeaponComponent';
import { WeaponSystem } from '@src/weapons/WeaponSystem';
import * as Phaser from 'phaser';

export class PulseSystem implements System {
    private system: WeaponSystem;

    constructor(scene: Phaser.Scene, player: PlayerSystem) {
        this.system = new WeaponSystem(scene, player, {
            bulletFactory: new PulseFactory(scene, new PulseLevel1()),
            group: { frame: 'player/bullet-primary.png', maxSize: 200 },
            triggerStep: 150,
        });
    }

    public create(): void {
        this.system.create();
    }

    public update(time: number, delta: number): void {
        this.system.update(time, delta);
    }

    public get weaponComponent(): WeaponComponent {
        return this.system.weaponComponent;
    }
}
