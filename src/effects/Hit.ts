import { Position } from '@src/core/Position';
import * as Phaser from 'phaser';

export interface Hit {
    readonly part: Phaser.GameObjects.Sprite;
    readonly position: Position;
    readonly damage: number;
}
