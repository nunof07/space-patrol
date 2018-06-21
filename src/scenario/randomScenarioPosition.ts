import { Position } from '@src/core/Position';
import * as Phaser from 'phaser';
import * as Random from 'random-js';

export function randomScenarioPosition(
    scene: Phaser.Scene,
    engine: Random.Engine
): Position {
    return {
        x: Random.integer(0, scene.cameras.main.width)(engine),
        y: 0,
    };
}
