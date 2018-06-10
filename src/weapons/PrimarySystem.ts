import { System } from '@src/core/System';
import { Player } from '@src/player/Player';
import { PrimaryComponent } from '@src/weapons/PrimaryComponent';
import { PrimaryFactory } from '@src/weapons/PrimaryFactory';
import { Trigger } from '@src/weapons/Trigger';
import { TriggerFactory } from '@src/weapons/TriggerFactory';
import * as Phaser from 'phaser';

export class PrimarySystem implements System {
    private readonly scene: Phaser.Scene;
    private readonly player: Player;
    private primary: PrimaryComponent;
    private trigger: Trigger;

    constructor(scene: Phaser.Scene, player: Player) {
        this.scene = scene;
        this.player = player;
    }

    public create(): void {
        this.primary = new PrimaryFactory(this.scene, this.player).create();
        this.trigger = new TriggerFactory(
            this.scene,
            this.primary,
            150
        ).create();
    }

    public update(time: number, delta: number): void {
        this.primary.update(time, delta);
        this.trigger.update(time, delta);
    }
}
