import { circlePosition } from '@src/core/circlePosition';
import { Position } from '@src/core/Position';
import { cockpit } from '@src/player/cockpit';
import { Bullet } from '@src/weapons/Bullet';
import { Burst } from '@src/weapons/burst/Burst';
import { BurstLevel } from '@src/weapons/burst/BurstLevel';
import { incWeaponLevel } from '@src/weapons/incWeaponLevel';
import { Weapon } from '@src/weapons/Weapon';
import { WeaponLevel } from '@src/weapons/WeaponLevel';
import { weaponNewLevel } from '@src/weapons/weaponNewLevel';

export class BurstDynamicLevel implements BurstLevel, WeaponLevel {
    private readonly counts: ReadonlyArray<number>;
    private currentLevelImpl: number;

    constructor(currentLevel: number = 1) {
        this.counts = [2, 4, 6, 8, 10, 12];
        this.currentLevelImpl = weaponNewLevel(
            currentLevel,
            1,
            this.counts.length
        );
    }

    public get count(): number {
        return this.counts[this.currentLevelImpl - 1];
    }

    public position(index: number, weapon: Weapon): Position {
        const center = cockpit(weapon.player.group);
        const sign = index < this.count / 2 ? -1 : 1;

        return {
            x: center.x + sign * 28,
            y: center.y,
        };
    }

    public destination(index: number, weapon: Weapon): Position {
        const center = cockpit(weapon.player.group);
        const radius = 350;

        if (this.count === 2) {
            return {
                x: center.x + (index === 0 ? -1 : 1) * 60,
                y: center.y - radius,
            };
        } else {
            const separation = Math.PI / (this.count * 2);
            const startIndex = this.count / 2 + 1 / 2;
            const angle = (index + startIndex) * separation;

            return circlePosition(center, angle, radius);
        }
    }

    public incLevel(): boolean {
        const incremented = this.currentLevelImpl < this.counts.length;
        this.currentLevelImpl = incWeaponLevel(
            this.currentLevelImpl,
            this.counts.length
        );

        return incremented;
    }

    public createBullet(
        scene: Phaser.Scene,
        weapon: Weapon,
        index: number,
        sprite: Phaser.GameObjects.Sprite
    ): Bullet {
        const position = this.position(index, weapon);
        const destination = this.destination(index, weapon);

        return new Burst(scene, sprite, position, destination);
    }

    public get currentLevel(): number {
        return this.currentLevelImpl;
    }

    public get bulletsCount(): number {
        return this.count;
    }

    public restart(): void {
        this.currentLevelImpl = 1;
    }
}
