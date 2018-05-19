import { config } from '@src/game/config';
import * as Phaser from 'phaser';
import { assoc } from 'ramda';

export function headlessConfig(): GameConfig {
    return assoc('banner', false, assoc('type', Phaser.HEADLESS, config()));
}
