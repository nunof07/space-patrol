import { setupProgressBar } from '@src/progressBar/setupProgressBar';
import { mockStart } from '@test/game/mockStart';
import { expect } from 'chai';

describe.skip('progressBar', () => {
    describe('#setupProgressBar', () => {
        it('should not throw', done => {
            mockStart(scene => {
                expect(() => {
                    setupProgressBar(scene);
                }).to.not.throw();
                done();
            });
        });
    });
});
