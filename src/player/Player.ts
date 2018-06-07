import { HealthSystem } from '@src/health/HealthSystem';
import * as Phaser from 'phaser';

export interface Player {
    readonly health: HealthSystem;
    readonly group: Phaser.GameObjects.Group;
    readonly particles: ReadonlyArray<
        Phaser.GameObjects.Particles.ParticleEmitter
    >;
}
