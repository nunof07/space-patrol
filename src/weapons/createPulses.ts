import { Bullet } from '@src/weapons/Bullet';
import { PulseLevel } from '@src/weapons/PulseLevel';
import { Weapon } from '@src/weapons/Weapon';
import * as Phaser from 'phaser';

export function createPulses(
    scene: Phaser.Scene,
    sprites: ReadonlyArray<Phaser.GameObjects.Sprite>,
    level: PulseLevel,
    weapon: Weapon
): ReadonlyArray<Bullet> {
    let result: ReadonlyArray<Bullet> = [];

    sprites.forEach((sprite, index) => {
        const position = level.position(index, weapon);
        const bullet = new Bullet(scene, sprite, position);
        bullet.create();
        result = result.concat(bullet);
    });

    return result;
}
