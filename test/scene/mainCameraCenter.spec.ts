import { asType } from '@src/core/asType';
import { mainCameraCenter } from '@src/scene/mainCameraCenter';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe('scene', () => {
    describe('#mainCameraCenter', () => {
        it('should return main camera midpoint', () => {
            const mockScene = {
                cameras: {
                    main: { width: 100, height: 100 },
                },
            };
            expect(
                mainCameraCenter(asType<Phaser.Scene>(mockScene))
            ).to.deep.equal({
                x: 50,
                y: 50,
            });
        });
    });
});
