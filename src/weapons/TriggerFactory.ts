import { Factory } from '@src/core/Factory';
import { TriggerComponent } from '@src/weapons/TriggerComponent';
import { WeaponComponent } from '@src/weapons/WeaponComponent';
import * as Phaser from 'phaser';

export class TriggerFactory implements Factory<TriggerComponent> {
    private readonly scene: Phaser.Scene;
    private readonly weapon: WeaponComponent;
    private readonly step: number;

    constructor(scene: Phaser.Scene, weapon: WeaponComponent, step: number) {
        this.scene = scene;
        this.weapon = weapon;
        this.step = step;
    }

    public create(): TriggerComponent {
        const trigger = new TriggerComponent(this.scene, this.step);
        trigger.onFire(() => {
            this.weapon.fire();
        });

        return trigger;
    }
}
