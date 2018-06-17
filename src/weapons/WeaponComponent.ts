import { Component } from '@src/core/Component';
import { Bullet } from '@src/weapons/Bullet';
import { BulletFactory } from '@src/weapons/BulletFactory';
import { updateBullets } from '@src/weapons/updateBullets';
import { Weapon } from '@src/weapons/Weapon';

export class WeaponComponent implements Component {
    private weaponImpl: Weapon;
    private factoryImpl: BulletFactory;

    constructor(weapon: Weapon, factory: BulletFactory) {
        this.weaponImpl = weapon;
        this.factoryImpl = factory;
    }

    public update(time: number, delta: number): void {
        this.weaponImpl = this.newWeapon(
            updateBullets(this.weaponImpl.bullets, time, delta)
        );
    }

    public fire(): void {
        const bullets = this.factoryImpl.create(this.weaponImpl);
        this.weaponImpl = this.newWeapon(
            this.weaponImpl.bullets.concat(bullets)
        );
    }

    public get weapon(): Weapon {
        return this.weaponImpl;
    }

    public get factory(): BulletFactory {
        return this.factoryImpl;
    }

    private newWeapon(bullets: ReadonlyArray<Bullet>): Weapon {
        return new Weapon(
            this.weaponImpl.player,
            bullets,
            this.weaponImpl.group
        );
    }
}
