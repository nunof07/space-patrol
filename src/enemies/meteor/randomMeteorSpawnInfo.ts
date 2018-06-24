import { MeteorSpawnInfo } from '@src/enemies/meteor/MeteorSpawnInfo';
import { MeteorType } from '@src/enemies/meteor/MeteorType';
import { randomMeteorSize } from '@src/enemies/meteor/randomMeteorSize';
import { randomMeteorType } from '@src/enemies/meteor/randomMeteorType';
import * as Phaser from 'phaser';
import * as Random from 'random-js';

export function randomMeteorSpawnInfo(
    scene: Phaser.Scene,
    engine: Random.Engine,
    composition?: MeteorType
): MeteorSpawnInfo {
    return {
        size: randomMeteorSize(engine),
        composition:
            composition !== undefined ? composition : randomMeteorType(engine),
        startX: Random.integer(0, scene.cameras.main.width)(engine),
        endX: Random.integer(0, scene.cameras.main.width)(engine),
        speed: Random.integer(100, 500)(engine),
    };
}
