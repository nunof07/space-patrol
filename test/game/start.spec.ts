import { start } from '@src/game/start';
import { EmptyScene } from '@test/EmptyScene';
import { headlessConfig } from '@test/game/headlessConfig';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe('game', () => {
    describe('#start', () => {
        it('should not throw', () => {
            expect(() => start(headlessConfig(), [EmptyScene])).to.not.throw();
        });
        it('should not return null', () => {
            expect(start(headlessConfig(), [EmptyScene])).to.not.equal(
                null,
                'Expected non-null value'
            );
        });
        it('should return Game object', () => {
            expect(start(headlessConfig(), [EmptyScene])).to.be.instanceof(
                Phaser.Game
            );
        });
    });
});
