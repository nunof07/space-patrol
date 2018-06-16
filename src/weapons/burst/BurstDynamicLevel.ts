import { circlePosition } from '@src/core/circlePosition';
import { Position } from '@src/core/Position';
import { cockpit } from '@src/player/cockpit';
import { BurstLevel } from '@src/weapons/burst/BurstLevel';
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

    public incLevel(): void {
        this.currentLevelImpl = weaponNewLevel(
            this.currentLevelImpl + 1,
            this.currentLevelImpl,
            this.counts.length
        );
    }

    public get currentLevel(): number {
        return this.currentLevelImpl;
    }
}
