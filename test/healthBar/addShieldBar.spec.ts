import { asType } from '@src/core/asType';
import { addShieldBar } from '@src/healthBar/addShieldBar';
import { HealthBar } from '@src/healthBar/HealthBar';
import { expect } from 'chai';
import * as Phaser from 'phaser';

function getSprite(): Phaser.GameObjects.Sprite {
    return asType<Phaser.GameObjects.Sprite>({
        x: 100,
        y: 100,
        width: 50,
        height: 50,
    });
}

describe('addShieldBar', () => {
    let sprite: Phaser.GameObjects.Sprite;
    let bar: HealthBar;

    beforeEach(() => {
        sprite = getSprite();
        bar = addShieldBar(sprite);
    });
    describe('#addShieldBar', () => {
        it('should return parent sprite', () => {
            expect(bar.parent).to.equal(sprite);
        });
        it('should return background', () => {
            expect(bar.background).to.not.equal(
                null,
                'Expected a background value'
            );
        });
        it('should return filled', () => {
            expect(bar.filled).to.not.equal(null, 'Expected a filled value');
        });
    });
});
