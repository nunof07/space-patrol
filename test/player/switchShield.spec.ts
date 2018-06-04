import { asType } from '@src/core/asType';
import { switchShield } from '@src/player/switchShield';
import { expect } from 'chai';
import * as Phaser from 'phaser';

function mockSprites(): ReadonlyArray<Phaser.GameObjects.Sprite> {
    return [
        { name: 'shield1', visible: false, active: false },
        { name: 'shield2', visible: false, active: false },
        { name: 'shield3', visible: false, active: false },
        // tslint:disable-next-line:no-unnecessary-callback-wrapper
    ].map(sprite => asType<Phaser.GameObjects.Sprite>(sprite));
}

function filterVisible(
    sprites: ReadonlyArray<Phaser.GameObjects.Sprite>
): ReadonlyArray<Phaser.GameObjects.Sprite> {
    return sprites.filter(sprite => sprite.visible);
}

function expectOneShieldNamed(
    sprites: ReadonlyArray<Phaser.GameObjects.Sprite>,
    name: string
): void {
    expect(filterVisible(sprites).length).to.equal(1);
    expect(filterVisible(sprites)[0].name).to.equal(name);
}

describe('player', () => {
    describe('#switchShield', () => {
        let sprites: ReadonlyArray<Phaser.GameObjects.Sprite>;

        beforeEach(() => {
            sprites = mockSprites();
        });
        it('should hide all shields', () => {
            switchShield({ health: 1, shield: 0 }, sprites);
            expect(filterVisible(sprites).length).to.equal(0);
        });
        it('should show first shield', () => {
            switchShield({ health: 1, shield: 0.1 }, sprites);
            expectOneShieldNamed(sprites, 'shield1');
        });
        it('should show second shield', () => {
            switchShield({ health: 1, shield: 0.5 }, sprites);
            expectOneShieldNamed(sprites, 'shield2');
        });
        it('should show third shield', () => {
            switchShield({ health: 1, shield: 1 }, sprites);
            expectOneShieldNamed(sprites, 'shield3');
        });
    });
});
