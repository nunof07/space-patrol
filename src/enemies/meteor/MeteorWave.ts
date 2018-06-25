import { Meteor } from '@src/enemies/meteor/Meteor';
import { MeteorFactory } from '@src/enemies/meteor/MeteorFactory';
import { MeteorPlayerCollider } from '@src/enemies/meteor/MeteorPlayerCollider';
import { MeteorWaveInfo } from '@src/enemies/meteor/MeteorWaveInfo';
import { randomMeteorSpawnInfo } from '@src/enemies/meteor/randomMeteorSpawnInfo';
import { Wave } from '@src/enemies/Wave';
import { updateDestructables } from '@src/health/updateDestructables';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { DestructableBulletCollider } from '@src/weapons/DestructableBulletCollider';
import { WeaponsSystem } from '@src/weapons/WeaponsSystem';
import * as Phaser from 'phaser';

export class MeteorWave implements Wave {
    private readonly scene: Phaser.Scene;
    private readonly emitter: Phaser.Events.EventEmitter;
    private readonly info: MeteorWaveInfo;
    private readonly bulletCollider: DestructableBulletCollider;
    private readonly playerCollider: MeteorPlayerCollider;
    private readonly player: PlayerSystem;
    private readonly weapons: WeaponsSystem;
    private timer: Phaser.Time.TimerEvent;
    private created: number;
    private meteors: ReadonlyArray<Meteor>;

    constructor(
        scene: Phaser.Scene,
        player: PlayerSystem,
        weapons: WeaponsSystem,
        info: MeteorWaveInfo
    ) {
        this.scene = scene;
        this.emitter = new Phaser.Events.EventEmitter();
        this.info = info;
        this.meteors = [];
        this.created = 0;
        this.player = player;
        this.weapons = weapons;
        this.bulletCollider = new DestructableBulletCollider(this.scene);
        this.playerCollider = new MeteorPlayerCollider(this.scene, this.player);
    }

    public onComplete(callback: () => void): void {
        this.emitter.on('complete', callback);
    }

    public update(time: number, delta: number): void {
        this.meteors = updateDestructables(this.meteors, time, delta);

        if (this.created === this.info.count && this.meteors.length === 0) {
            this.timer.destroy();
            this.emitter.emit('complete');
        }
    }

    public next(): void {
        if (this.created < this.info.count) {
            this.meteors = this.meteors.concat(this.createMeteor());
            this.timer = this.scene.time.addEvent({
                delay: this.info.delay.value,
                callback: () => {
                    this.timer.destroy();
                    this.next();
                },
            });
        }
    }

    private createMeteor(): Meteor {
        const factory = new MeteorFactory(
            this.scene,
            randomMeteorSpawnInfo(
                this.scene,
                this.info.engine,
                this.info.composition
            ),
            this.info.engine
        );
        const meteor = factory.create();
        this.bulletCollider.setup(
            meteor,
            this.weapons.pulse.weaponComponent.weapon
        );
        this.bulletCollider.setup(
            meteor,
            this.weapons.burst.weaponComponent.weapon
        );
        this.playerCollider.setup(meteor);
        this.created += 1;

        return meteor;
    }
}
