import { asType } from '@src/core/asType';
import { canFire } from '@src/weapons/canFire';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe('weapons', () => {
    describe('#canFire', () => {
        let scene: Phaser.Scene;

        beforeEach(() => {
            scene = asType<Phaser.Scene>({
                input: { activePointer: { primaryDown: true } },
            });
        });
        it('should be able to fire', () => {
            expect(canFire(scene, 200, 100)).to.equal(
                true,
                'Expected canFire to return true'
            );
        });
        it('should not be able to fire', () => {
            expect(canFire(scene, 100, 200)).to.equal(
                false,
                'Expected canFire to return false'
            );
        });
    });
});
