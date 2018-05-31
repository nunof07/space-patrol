import { asType } from '@src/core/asType';
import { addResizeListener } from '@src/game/addResizeListener';
import { expect } from 'chai';
import { EventEmitter } from 'eventemitter3';
import * as Phaser from 'phaser';
import * as sinon from 'sinon';

function getResizeSpy(): [sinon.SinonSpy, Window] {
    const emitter = new EventEmitter();
    const mockWindow = {
        addEventListener: (key: string, callback: Function) => {
            // tslint:disable-next-line:no-unnecessary-callback-wrapper
            emitter.on(key, () => {
                callback();
            });
        },
        innerWidth: 100,
        innerHeight: 200,
    };
    const mockGame = { resize: sinon.spy() };
    const windowObj = asType<Window>(mockWindow);
    addResizeListener(asType<Phaser.Game>(mockGame), windowObj);
    mockWindow.innerWidth = 200;
    mockWindow.innerHeight = 200;
    emitter.emit('resize');

    return [mockGame.resize, windowObj];
}

describe('game', () => {
    describe('#addResizeListener', () => {
        it('should resize game on window resize', () => {
            const [resize, windowObj] = getResizeSpy();
            expect(
                resize.calledOnceWith(
                    windowObj.innerWidth,
                    windowObj.innerHeight
                )
            ).to.equal(
                true,
                'Expected game resize to be called with new window size'
            );
        });
    });
});
