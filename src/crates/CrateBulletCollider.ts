import { Crate } from '@src/crates/Crate';
import { getData } from '@src/gameObjects/getData';
import { Bullet } from '@src/weapons/Bullet';
import { Weapon } from '@src/weapons/Weapon';
import * as Phaser from 'phaser';

export class CrateBulletCollider {
    private readonly scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public setup(crate: Crate, weapon: Weapon): void {
        this.scene.physics.add.overlap(
            crate.sprite,
            weapon.group,
            (_crate, bulletObj) => {
                const bullet = getData<Bullet>(bulletObj, 'bullet');
                crate.hit(bullet.damage);
                bullet.destroy();
            }
        );
    }
}
