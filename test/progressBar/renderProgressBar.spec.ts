import { addProgressBar } from '@src/progressBar/addProgressBar';
import { renderProgressBar } from '@src/progressBar/renderProgressBar';
import { mockStart } from '@test/game/mockStart';
import { expect } from 'chai';

describe.skip('progressBar', () => {
    describe('#renderProgressBar', () => {
        it('should not throw', done => {
            mockStart(scene => {
                const graphics = scene.add.graphics();
                const position = { x: 50, y: 50 };
                const size = { width: 100, height: 100 };
                const bar = addProgressBar(position, size);
                expect(() => {
                    renderProgressBar(graphics, bar);
                }).to.not.throw();
                done();
            });
        });
    });
});
