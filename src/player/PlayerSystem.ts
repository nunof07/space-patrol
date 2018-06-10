import { System } from '@src/core/System';
import { HealthSystem } from '@src/health/HealthSystem';
import { Hitpoints } from '@src/health/Hitpoints';
import { Vitality } from '@src/health/Vitality';
import { addPlayer } from '@src/player/addPlayer';
import { cockpit } from '@src/player/cockpit';
import { death } from '@src/player/death';
import { followPointer } from '@src/player/followPointer';
import { Player } from '@src/player/Player';
import { PrimarySystem } from '@src/weapons/PrimarySystem';
import * as Phaser from 'phaser';

export class PlayerSystem implements System {
    private readonly scene: Phaser.Scene;
    private readonly health: HealthSystem;
    private group: Phaser.GameObjects.Group;
    private particles: ReadonlyArray<
        Phaser.GameObjects.Particles.ParticleEmitter
    >;
    private primary: PrimarySystem;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.health = new HealthSystem(
            scene,
            () => cockpit(this.group),
            new Vitality(new Hitpoints(100, 100), new Hitpoints(100, 0))
        );
    }

    public create(): void {
        [this.group, this.particles] = addPlayer(this.scene);
        followPointer(this.scene, this.player());
        this.health.create();
        this.health.health().onDeath(() => {
            death(this.scene, this.player());
        });
        this.primary = new PrimarySystem(this.scene, this.player());
        this.primary.create();
    }

    public update(time: number, delta: number): void {
        this.health.update(time, delta);
        this.primary.update(time, delta);
    }

    public player(): Player {
        return {
            health: this.health,
            group: this.group,
            particles: this.particles,
        };
    }
}
