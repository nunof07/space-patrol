import { Game } from '@src/Game';
import { headlessConfig } from '@test/game/headlessConfig';
import { expect } from 'chai';
import * as Phaser from 'phaser';
import { assoc } from 'ramda';

describe('Game', () => {
    describe('#constructor', () => {
        it('should not throw', () => {
            expect(() => {
                // tslint:disable-next-line:no-unused-expression
                new Game();
            }).to.not.throw();
        });
    });
    describe.skip('start scene in Phaser game', () => {
        it('should not throw', () => {
            expect(() => {
                // tslint:disable-next-line:no-unused-expression
                new Phaser.Game(assoc('scene', Game, headlessConfig()));
            }).to.not.throw();
        });
    });
});
