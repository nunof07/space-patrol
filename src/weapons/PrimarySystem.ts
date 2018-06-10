import { CompositeComponent } from '@src/core/CompositeComponent';
import { System } from '@src/core/System';
import { Player } from '@src/player/Player';
import { PrimaryFactory } from '@src/weapons/PrimaryFactory';
import { TriggerFactory } from '@src/weapons/TriggerFactory';
import * as Phaser from 'phaser';

export class PrimarySystem implements System {
    private readonly scene: Phaser.Scene;
    private readonly player: Player;
    private components: CompositeComponent;

    constructor(scene: Phaser.Scene, player: Player) {
        this.scene = scene;
        this.player = player;
    }

    public create(): void {
        const primary = new PrimaryFactory(this.scene, this.player).create();
        const trigger = new TriggerFactory(this.scene, primary, 150).create();
        this.components = new CompositeComponent([primary, trigger]);
    }

    public update(time: number, delta: number): void {
        this.components.update(time, delta);
    }
}
