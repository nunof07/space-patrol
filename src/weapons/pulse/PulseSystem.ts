import { CompositeComponent } from '@src/core/CompositeComponent';
import { System } from '@src/core/System';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { PulseFactory } from '@src/weapons/pulse/PulseFactory';
import { PulseLevel6 } from '@src/weapons/pulse/PulseLevel6';
import { TriggerFactory } from '@src/weapons/TriggerFactory';
import { WeaponFactory } from '@src/weapons/WeaponFactory';
import * as Phaser from 'phaser';

export class PulseSystem implements System {
    private readonly scene: Phaser.Scene;
    private readonly player: PlayerSystem;
    private components: CompositeComponent;

    constructor(scene: Phaser.Scene, player: PlayerSystem) {
        this.scene = scene;
        this.player = player;
    }

    public create(): void {
        const primary = new WeaponFactory(
            this.scene,
            this.player.player(),
            new PulseFactory(this.scene, new PulseLevel6()),
            { frame: 'player/bullet-primary.png', maxSize: 100 }
        ).create();
        const trigger = new TriggerFactory(this.scene, primary, 150).create();
        this.components = new CompositeComponent([primary, trigger]);
    }

    public update(time: number, delta: number): void {
        this.components.update(time, delta);
    }
}
