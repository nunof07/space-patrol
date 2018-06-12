import { Bullet } from '@src/weapons/Bullet';
import { createPulses } from '@src/weapons/pulse/createPulses';
import { PulseLevel } from '@src/weapons/pulse/PulseLevel';
import { updateBullets } from '@src/weapons/updateBullets';
import { Weapon } from '@src/weapons/Weapon';
import { WeaponComponent } from '@src/weapons/WeaponComponent';
import * as Phaser from 'phaser';

export class PulseComponent implements WeaponComponent {
    private readonly scene: Phaser.Scene;
    private weapon: Weapon;
    private level: PulseLevel;

    constructor(scene: Phaser.Scene, weapon: Weapon, level: PulseLevel) {
        this.scene = scene;
        this.weapon = weapon;
        this.level = level;
    }

    public update(time: number, delta: number): void {
        this.weapon = this.newWeapon(
            updateBullets(this.weapon.bullets, time, delta)
        );
    }

    public fire(): void {
        const bullets = createPulses(this.scene, this.level, this.weapon);
        this.weapon = this.newWeapon(this.weapon.bullets.concat(bullets));
    }

    private newWeapon(bullets: ReadonlyArray<Bullet>): Weapon {
        return new Weapon(this.weapon.player, bullets, this.weapon.group);
    }
}
