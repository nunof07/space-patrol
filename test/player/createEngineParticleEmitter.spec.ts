import { asType } from '@src/core/asType';
import { createEngineParticleEmitter } from '@src/player/createEngineParticleEmitter';
import { expect } from 'chai';
import * as Phaser from 'phaser';
import * as sinon from 'sinon';

function expectCreateEmitterToBeCalled(isLeft: boolean): void {
    type Manager = Phaser.GameObjects.Particles.ParticleEmitterManager;
    const createEmitter = sinon.spy(() => {
        return { startFollow: sinon.spy() };
    });
    const particles = asType<Manager>({ createEmitter });
    const sprite = asType<Phaser.GameObjects.Sprite>({});
    createEngineParticleEmitter(particles, sprite, isLeft);
    expect(createEmitter.called).to.equal(
        true,
        'Expected createEmitter to have been called'
    );
}

describe('player', () => {
    describe('#createEngineParticleEmitter', () => {
        it('should call createEmitter when left', () => {
            expectCreateEmitterToBeCalled(true);
        });
        it('should call createEmitter when right', () => {
            expectCreateEmitterToBeCalled(false);
        });
    });
});
