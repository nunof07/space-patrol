import { addAnimation } from '@src/animation/addAnimation';
import { Restartable } from '@src/core/Restartable';
import { Scalar } from '@src/core/Scalar';
import { System } from '@src/core/System';
import { Crate } from '@src/crates/Crate';
import { CrateFactory } from '@src/crates/CrateFactory';
import { destroyDestructables } from '@src/health/destroyDestructables';
import { updateDestructables } from '@src/health/updateDestructables';
import { DestructableBulletCollider } from '@src/weapons/DestructableBulletCollider';
import { WeaponsSystem } from '@src/weapons/WeaponsSystem';
import * as Phaser from 'phaser';

export class CratesSystem implements System, Restartable {
    private readonly scene: Phaser.Scene;
    private readonly factory: CrateFactory;
    private readonly weapons: WeaponsSystem;
    private readonly collider: DestructableBulletCollider;
    private readonly emitter: Phaser.Events.EventEmitter;
    private readonly delay: Scalar<number>;
    private timer: Phaser.Time.TimerEvent;
    private crates: ReadonlyArray<Crate>;

    constructor(
        scene: Phaser.Scene,
        weapons: WeaponsSystem,
        delay: Scalar<number>
    ) {
        this.scene = scene;
        this.factory = new CrateFactory(scene);
        this.crates = [];
        this.weapons = weapons;
        this.collider = new DestructableBulletCollider(this.scene);
        this.emitter = new Phaser.Events.EventEmitter();
        this.delay = delay;
    }

    public create(): void {
        addAnimation(this.scene, 'crateExplosion', 'crates/smoke_plume_', 10);
        this.timer = this.scene.time.addEvent(this.timerConfig());
    }

    public onCrateExploded(callback: (crate: Crate) => void): void {
        this.emitter.on('crateExplosion', callback);
    }

    public update(time: number, delta: number): void {
        this.crates = updateDestructables(this.crates, time, delta);
    }

    public restart(): void {
        destroyDestructables(this.crates);
        this.timer.reset(this.timerConfig());
    }

    private timerConfig(): TimerEventConfig {
        return {
            delay: this.delay.value,
            loop: true,
            callback: () => {
                this.createCrate();
            },
        };
    }

    private createCrate(): void {
        const crate = this.factory.create();
        crate.onExplosion(crateObj => {
            this.emitter.emit('crateExplosion', crateObj);
            this.scene.sound.play('crate_explosion');
        });
        this.crates = this.crates.concat(crate);
        this.collider.setup(crate, this.weapons.pulse.weaponComponent.weapon);
        this.collider.setup(crate, this.weapons.burst.weaponComponent.weapon);
    }
}
