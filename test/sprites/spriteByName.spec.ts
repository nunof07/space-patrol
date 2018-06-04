import { asType } from '@src/core/asType';
import { spriteByName } from '@src/sprites/spriteByName';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe('sprites', () => {
    describe('#spriteByName', () => {
        it('should filter by name', () => {
            const sprites = [
                { name: 'hello' },
                { name: 'world' },
                { name: 'world' },
                // tslint:disable-next-line:no-unnecessary-callback-wrapper
            ].map(sprite => asType<Phaser.GameObjects.Sprite>(sprite));
            expect(spriteByName(sprites, 'world').length).to.equal(2);
        });
    });
});
