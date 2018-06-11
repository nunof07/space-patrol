import { asType } from '@src/core/asType';
import { Hitpoints } from '@src/health/Hitpoints';
import { Vitality } from '@src/health/Vitality';
import { switchShield } from '@src/player/switchShield';
import { expect } from 'chai';
import * as Phaser from 'phaser';

function newHealth(health: number, shield: number): Vitality {
    return new Vitality(new Hitpoints(100, health), new Hitpoints(100, shield));
}

function mockSprites(): ReadonlyArray<Phaser.GameObjects.Sprite> {
    return [
        {
            name: 'shield1',
            visible: false,
            active: false,
            body: { enable: false },
        },
        {
            name: 'shield2',
            visible: false,
            active: false,
            body: { enable: false },
        },
        {
            name: 'shield3',
            visible: false,
            active: false,
            body: { enable: false },
        },
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
            switchShield(newHealth(100, 0), sprites);
            expect(filterVisible(sprites).length).to.equal(0);
        });
        it('should show first shield', () => {
            switchShield(newHealth(100, 1), sprites);
            expectOneShieldNamed(sprites, 'shield1');
        });
        it('should show second shield', () => {
            switchShield(newHealth(100, 50), sprites);
            expectOneShieldNamed(sprites, 'shield2');
        });
        it('should show third shield', () => {
            switchShield(newHealth(100, 100), sprites);
            expectOneShieldNamed(sprites, 'shield3');
        });
    });
});
