import { CompositeComponent } from '@src/core/CompositeComponent';
import { Restartable } from '@src/core/Restartable';
import { System } from '@src/core/System';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { TriggerFactory } from '@src/weapons/TriggerFactory';
import { WeaponComponent } from '@src/weapons/WeaponComponent';
import { WeaponFactory } from '@src/weapons/WeaponFactory';
import { WeaponSystemInfo } from '@src/weapons/WeaponSystemInfo';
import * as Phaser from 'phaser';

export class WeaponSystem implements System, Restartable {
    private readonly scene: Phaser.Scene;
    private readonly player: PlayerSystem;
    private readonly info: WeaponSystemInfo;
    private weaponImpl: WeaponComponent;
    private components: CompositeComponent;

    constructor(
        scene: Phaser.Scene,
        player: PlayerSystem,
        info: WeaponSystemInfo
    ) {
        this.scene = scene;
        this.player = player;
        this.info = info;
    }

    public create(): void {
        this.weaponImpl = new WeaponFactory(
            this.scene,
            this.player.player,
            this.info.bulletFactory,
            { group: this.info.group, fireAudioKey: this.info.fireAudioKey }
        ).create();
        const trigger = new TriggerFactory(
            this.scene,
            this.weaponImpl,
            this.info.triggerStep
        ).create();
        this.components = new CompositeComponent([this.weaponImpl, trigger]);
    }

    public update(time: number, delta: number): void {
        this.components.update(time, delta);
    }

    public get weaponComponent(): WeaponComponent {
        return this.weaponImpl;
    }

    public restart(): void {
        this.weaponComponent.factory.level.restart();
    }
}
