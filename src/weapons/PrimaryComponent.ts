import { asType } from '@src/core/asType';
import { Bullet } from '@src/weapons/Bullet';
import { updateBullets } from '@src/weapons/updateBullets';
import { Weapon } from '@src/weapons/Weapon';
import { WeaponComponent } from '@src/weapons/WeaponComponent';
import * as Phaser from 'phaser';

export class PrimaryComponent implements WeaponComponent {
    private readonly scene: Phaser.Scene;
    private weapon: Weapon;

    constructor(scene: Phaser.Scene, weapon: Weapon) {
        this.scene = scene;
        this.weapon = weapon;
    }

    public update(time: number, delta: number): void {
        this.weapon = this.newWeapon(
            updateBullets(this.weapon.bullets, time, delta)
        );
    }

    public fire(): void {
        const sprite = asType<Phaser.GameObjects.Sprite>(
            this.weapon.group.get()
        );

        if (sprite !== null) {
            const bullet = new Bullet(this.scene, sprite, this.weapon.player);
            bullet.create();
            this.weapon = this.newWeapon(this.weapon.bullets.concat(bullet));
        }
    }

    private newWeapon(bullets: ReadonlyArray<Bullet>): Weapon {
        return new Weapon(this.weapon.player, bullets, this.weapon.group);
    }
}
