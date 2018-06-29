import { asType } from '@src/core/asType';
import { Position } from '@src/core/Position';
import { EnemyBullet } from '@src/enemies/EnemyBullet';
import { EnemyWeaponInfo } from '@src/enemies/EnemyWeaponInfo';
import { Bullet } from '@src/weapons/Bullet';
import * as Phaser from 'phaser';

export class EnemyBulletFactory {
    private readonly scene: Phaser.Scene;
    private readonly group: Phaser.GameObjects.Group;
    private readonly info: EnemyWeaponInfo;

    constructor(
        scene: Phaser.Scene,
        group: Phaser.GameObjects.Group,
        info: EnemyWeaponInfo
    ) {
        this.scene = scene;
        this.group = group;
        this.info = info;
    }

    public create(parent: Position): ReadonlyArray<Bullet> {
        let result: ReadonlyArray<Bullet> = [];

        for (let i = 0; i < this.info.count; i += 1) {
            const sprite = asType<Phaser.GameObjects.Sprite>(this.group.get());

            if (sprite !== null) {
                const bullet = new EnemyBullet(this.scene, sprite, {
                    angle: 180,
                    lifespan: this.info.lifespan,
                    speed: this.info.speed,
                    startPosition: parent,
                });
                bullet.create();
                result = result.concat(bullet);
            }
        }

        return result;
    }
}
