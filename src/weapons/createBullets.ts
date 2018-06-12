import { asType } from '@src/core/asType';
import { Bullet } from '@src/weapons/Bullet';
import { Weapon } from '@src/weapons/Weapon';
import * as Phaser from 'phaser';

export function createBullets(
    weapon: Weapon,
    count: number,
    createBullet: (index: number, sprite: Phaser.GameObjects.Sprite) => Bullet
): ReadonlyArray<Bullet> {
    let result: ReadonlyArray<Bullet> = [];

    for (let i = 0; i < count; i += 1) {
        const sprite = asType<Phaser.GameObjects.Sprite>(weapon.group.get());

        if (sprite !== null) {
            const bullet = createBullet(i, sprite);
            bullet.create();
            result = result.concat(bullet);
        }
    }

    return result;
}
