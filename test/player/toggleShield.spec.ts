import { asType } from '@src/core/asType';
import { toggleShield } from '@src/player/toggleShield';
import { expect } from 'chai';
import * as Phaser from 'phaser';

function expectShield(shield: Phaser.GameObjects.Sprite, state: boolean): void {
    expect(
        shield.visible === state &&
            shield.active === state &&
            asType<{ enable: boolean }>(shield.body).enable === state
    ).to.equal(true, `Expected shield state to be ${state}`);
}

describe('player', () => {
    describe('#toggleShield', () => {
        let shield: Phaser.GameObjects.Sprite;

        beforeEach(() => {
            shield = asType<Phaser.GameObjects.Sprite>({
                name: 'shield1',
                visible: false,
                active: false,
                body: { enable: false },
            });
        });
        it('should enable shield', () => {
            toggleShield(shield, true);
            expectShield(shield, true);
        });
        it('should disable shield', () => {
            toggleShield(shield, false);
            expectShield(shield, false);
        });
    });
});
