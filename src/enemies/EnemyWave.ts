import { Enemy } from '@src/enemies/Enemy';
import { EnemyPlayerCollider } from '@src/enemies/EnemyPlayerCollider';
import { EnemyWaveInfo } from '@src/enemies/EnemyWaveInfo';
import { Wave } from '@src/enemies/Wave';
import { destroyDestructables } from '@src/health/destroyDestructables';
import { Destructable } from '@src/health/Destructable';
import { updateDestructables } from '@src/health/updateDestructables';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { DestructableBulletCollider } from '@src/weapons/DestructableBulletCollider';
import { WeaponsSystem } from '@src/weapons/WeaponsSystem';
import * as Phaser from 'phaser';

export class EnemyWave<TEnemy extends Enemy> implements Wave {
    private readonly scene: Phaser.Scene;
    private readonly emitter: Phaser.Events.EventEmitter;
    private readonly info: EnemyWaveInfo<TEnemy>;
    private readonly bulletCollider: DestructableBulletCollider;
    private readonly playerCollider: EnemyPlayerCollider;
    private readonly player: PlayerSystem;
    private readonly weapons: WeaponsSystem;
    private timer: Phaser.Time.TimerEvent;
    private created: number;
    private enemies: ReadonlyArray<Enemy>;

    constructor(
        scene: Phaser.Scene,
        player: PlayerSystem,
        weapons: WeaponsSystem,
        info: EnemyWaveInfo<TEnemy>
    ) {
        this.scene = scene;
        this.emitter = new Phaser.Events.EventEmitter();
        this.info = info;
        this.enemies = [];
        this.created = 0;
        this.player = player;
        this.weapons = weapons;
        this.bulletCollider = new DestructableBulletCollider(this.scene);
        this.playerCollider = new EnemyPlayerCollider(this.scene, this.player);
    }

    public onComplete(callback: () => void): void {
        this.emitter.on('complete', callback);
    }

    public update(time: number, delta: number): void {
        this.enemies = updateDestructables(this.enemies, time, delta);

        if (this.created === this.info.count && this.enemies.length === 0) {
            this.timer.destroy();
            this.emitter.emit('complete');
        }
    }

    public next(): void {
        if (this.created < this.info.count) {
            this.enemies = this.enemies.concat(this.createEnemy());
            this.timer = this.scene.time.addEvent({
                delay: this.info.delay.value,
                callback: () => {
                    this.timer.destroy();
                    this.next();
                },
            });
        }
    }

    public destroy(): void {
        destroyDestructables(this.enemies);
        this.enemies = [];

        if (this.timer !== undefined) {
            this.timer.destroy();
        }
    }

    public onDeath(callback: (destructable: Destructable) => void): void {
        this.emitter.on('death', callback);
    }

    private createEnemy(): TEnemy {
        const enemy = this.info.factory.create();
        this.setupColliders(enemy);
        enemy.destructable.onDeath(destructable => {
            this.emitter.emit('death', destructable);
        });
        this.created += 1;

        return enemy;
    }

    private setupColliders(enemy: TEnemy): void {
        this.bulletCollider.setup(
            enemy,
            this.weapons.pulse.weaponComponent.weapon
        );
        this.bulletCollider.setup(
            enemy,
            this.weapons.burst.weaponComponent.weapon
        );
        this.playerCollider.setup(enemy);
    }
}
