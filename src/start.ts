import { Boot } from '@src/Boot';
import * as Phaser from 'phaser';

export function start(renderType: number): Phaser.Game {
    return new Phaser.Game({
        type: renderType,
        width: 800,
        height: 600,
        parent: 'game',
        scene: Boot,
    });
}
