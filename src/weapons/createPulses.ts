import { asType } from '@src/core/asType';
import { Bullet } from '@src/weapons/Bullet';
import { PulseLevel } from '@src/weapons/PulseLevel';
import { Weapon } from '@src/weapons/Weapon';
import * as Phaser from 'phaser';

export function createPulses(
    scene: Phaser.Scene,
    level: PulseLevel,
    weapon: Weapon
): ReadonlyArray<Bullet> {
    let result: ReadonlyArray<Bullet> = [];

    for (let i = 0; i < level.count; i += 1) {
        const sprite = asType<Phaser.GameObjects.Sprite>(weapon.group.get());

        if (sprite !== null) {
            const position = level.position(i, weapon);
            const angle = level.angle(i, weapon);
            const bullet = new Bullet(scene, sprite, position, angle);
            bullet.create();
            result = result.concat(bullet);
        }
    }

    return result;
}
