import { center } from '@src/core/center';
import { Position } from '@src/core/Position';
import * as Phaser from 'phaser';

export function mainCameraCenter(scene: Phaser.Scene): Position {
    return center(scene.cameras.main);
}
