import { asType } from '@src/core/asType';
import * as Phaser from 'phaser';

export function createEngineParticleEmitter(
    particles: Phaser.GameObjects.Particles.ParticleEmitterManager,
    engine: Phaser.GameObjects.Sprite,
    isLeft: boolean
): void {
    const emitter = particles.createEmitter({
        scale: { start: 0.5, end: 0 },
        alpha: { start: 1, end: 0 },
        speed: 0,
        life: 500,
        gravityX: (isLeft ? -1 : 1) * 70,
        gravityY: 50,
        blendMode: 'NORMAL',
    });
    emitter.startFollow(asType<Phaser.GameObjects.Particles.Particle>(engine));
}
