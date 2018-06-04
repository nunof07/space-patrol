import { addEngineParticles } from '@src/player/addEngineParticles';
import { mockStart } from '@test/game/mockStart';
import { expect } from 'chai';

describe.skip('player', () => {
    describe('#addEngineParticles', () => {
        it('should not throw', done => {
            mockStart(scene => {
                expect(() => {
                    addEngineParticles(
                        scene,
                        scene.add.sprite(0, 0, 'scenario/stars-black.png')
                    );
                }).to.not.throw();
                done();
            });
        });
    });
});
