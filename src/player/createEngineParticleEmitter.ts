import { asType } from '@src/core/asType';
import * as Phaser from 'phaser';

export function createEngineParticleEmitter(
    particles: Phaser.GameObjects.Particles.ParticleEmitterManager,
    engine: Phaser.GameObjects.Sprite,
    isLeft: boolean
): Phaser.GameObjects.Particles.ParticleEmitter {
    const emitter = particles.createEmitter({
        scale: { start: 1, end: 0 },
        alpha: { start: 1, end: 0 },
        speed: { min: 0, max: 5 },
        gravityX: (isLeft ? -1 : 1) * 70,
        gravityY: 50,
    });
    emitter.startFollow(asType<Phaser.GameObjects.Particles.Particle>(engine));

    return emitter;
}
