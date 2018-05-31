import { createEngineParticleEmitter } from '@src/player/createEngineParticleEmitter';
import * as Phaser from 'phaser';

export function addEngineParticles(
    scene: Phaser.Scene,
    engine: Phaser.GameObjects.Sprite
): void {
    const particles = scene.add.particles(
        'sprites',
        'player/engine-particle.png'
    );
    createEngineParticleEmitter(particles, engine, true);
    createEngineParticleEmitter(particles, engine, false);
}
