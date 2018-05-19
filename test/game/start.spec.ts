import { start } from '@src/game/start';
import { EmptyScene } from '@test/EmptyScene';
import { headlessConfig } from '@test/game/headlessConfig';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe('game', () => {
    describe('#start', () => {
        it('should return Game object', () => {
            expect(start(headlessConfig(), EmptyScene)).to.be.instanceof(
                Phaser.Game
            );
        });
    });
});
