import { Component } from '@src/core/Component';
import { Bullet } from '@src/weapons/Bullet';
import { BulletFactory } from '@src/weapons/BulletFactory';
import { updateBullets } from '@src/weapons/updateBullets';
import { Weapon } from '@src/weapons/Weapon';

export class WeaponComponent implements Component {
    private weapon: Weapon;
    private factory: BulletFactory;

    constructor(weapon: Weapon, factory: BulletFactory) {
        this.weapon = weapon;
        this.factory = factory;
    }

    public update(time: number, delta: number): void {
        this.weapon = this.newWeapon(
            updateBullets(this.weapon.bullets, time, delta)
        );
    }

    public fire(): void {
        const bullets = this.factory.create(this.weapon);
        this.weapon = this.newWeapon(this.weapon.bullets.concat(bullets));
    }

    private newWeapon(bullets: ReadonlyArray<Bullet>): Weapon {
        return new Weapon(this.weapon.player, bullets, this.weapon.group);
    }
}
