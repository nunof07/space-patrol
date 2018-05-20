import { headlessConfig } from '@test/game/headlessConfig';
import * as Phaser from 'phaser';
import { assoc } from 'ramda';

export function mockStart(run: (scene: Phaser.Scene) => void): Phaser.Game {
    return new Phaser.Game(assoc('scene', { create: run }, headlessConfig()));
}
