import { getData } from '@src/gameObjects/getData';
import { DestructableEntity } from '@src/health/DestructableEntity';
import { Bullet } from '@src/weapons/Bullet';
import { Weapon } from '@src/weapons/Weapon';
import * as Phaser from 'phaser';

export class DestructableBulletCollider {
    private readonly scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public setup(entity: DestructableEntity, weapon: Weapon): void {
        this.scene.physics.add.overlap(
            entity.sprite,
            weapon.group,
            (_entity, bulletObj) => {
                const bullet = getData<Bullet>(bulletObj, 'bullet');
                entity.destructable.hit(bullet.damage);
                this.scene.sound.play(bullet.hitAudioKey);
                bullet.destroy();
            }
        );
    }
}
