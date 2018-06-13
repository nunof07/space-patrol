import { CompositeComponent } from '@src/core/CompositeComponent';
import { System } from '@src/core/System';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { addBurstExplosion } from '@src/weapons/burst/addBurstExplosion';
import { BurstDynamicLevel } from '@src/weapons/burst/BurstDynamicLevel';
import { BurstFactory } from '@src/weapons/burst/BurstFactory';
import { TriggerFactory } from '@src/weapons/TriggerFactory';
import { WeaponFactory } from '@src/weapons/WeaponFactory';
import * as Phaser from 'phaser';

export class BurstSystem implements System {
    private readonly scene: Phaser.Scene;
    private readonly player: PlayerSystem;
    private components: CompositeComponent;

    constructor(scene: Phaser.Scene, player: PlayerSystem) {
        this.scene = scene;
        this.player = player;
    }

    public create(): void {
        addBurstExplosion(this.scene);
        const primary = new WeaponFactory(
            this.scene,
            this.player.player(),
            new BurstFactory(this.scene, new BurstDynamicLevel(6)),
            { frame: 'player/bullet-burst.png', maxSize: 30 }
        ).create();
        this.components = new CompositeComponent([
            primary,
            new TriggerFactory(this.scene, primary, 1000).create(),
        ]);
    }

    public update(time: number, delta: number): void {
        this.components.update(time, delta);
    }
}
