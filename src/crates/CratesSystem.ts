import { addAnimation } from '@src/animation/addAnimation';
import { System } from '@src/core/System';
import { Crate } from '@src/crates/Crate';
import { CrateFactory } from '@src/crates/CrateFactory';
import { updateDestructables } from '@src/health/updateDestructables';
import { DestructableBulletCollider } from '@src/weapons/DestructableBulletCollider';
import { WeaponsSystem } from '@src/weapons/WeaponsSystem';
import * as Phaser from 'phaser';

export class CratesSystem implements System {
    private readonly scene: Phaser.Scene;
    private readonly factory: CrateFactory;
    private readonly weapons: WeaponsSystem;
    private readonly collider: DestructableBulletCollider;
    private readonly emitter: Phaser.Events.EventEmitter;
    private crates: ReadonlyArray<Crate>;

    constructor(scene: Phaser.Scene, weapons: WeaponsSystem) {
        this.scene = scene;
        this.factory = new CrateFactory(scene);
        this.crates = [];
        this.weapons = weapons;
        this.collider = new DestructableBulletCollider(this.scene);
        this.emitter = new Phaser.Events.EventEmitter();
    }

    public create(): void {
        addAnimation(this.scene, 'crateExplosion', 'crates/smoke_plume_', 10);
        this.scene.time.addEvent({
            delay: 2000,
            loop: true,
            callback: () => {
                const crate = this.factory.create();
                crate.onExplosion(crateObj => {
                    this.emitter.emit('crateExplosion', crateObj);
                    this.scene.sound.play('crate_explosion');
                });
                this.crates = this.crates.concat(crate);
                this.collider.setup(
                    crate,
                    this.weapons.pulse.weaponComponent.weapon
                );
                this.collider.setup(
                    crate,
                    this.weapons.burst.weaponComponent.weapon
                );
            },
        });
    }

    public onCrateExploded(callback: (crate: Crate) => void): void {
        this.emitter.on('crateExplosion', callback);
    }

    public update(time: number, delta: number): void {
        this.crates = updateDestructables(this.crates, time, delta);
    }
}
