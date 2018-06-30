import { MeteorSpawnInfo } from '@src/enemies/meteor/MeteorSpawnInfo';
import { MeteorWaveInfo } from '@src/enemies/meteor/MeteorWaveInfo';
import { randomMeteorSize } from '@src/enemies/meteor/randomMeteorSize';
import * as Phaser from 'phaser';
import * as Random from 'random-js';

export function randomMeteorSpawnInfo(
    scene: Phaser.Scene,
    engine: Random.Engine,
    info: MeteorWaveInfo
): MeteorSpawnInfo {
    return {
        size: randomMeteorSize(engine, info.maxSize),
        composition: info.composition,
        startX: Random.integer(0, scene.cameras.main.width)(engine),
        endX: Random.integer(0, scene.cameras.main.width)(engine),
        speed: info.speed.value,
    };
}
