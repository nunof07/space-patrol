import { Position } from '@src/core/Position';
import { cockpit } from '@src/player/cockpit';
import { BurstLevel } from '@src/weapons/burst/BurstLevel';
import { Weapon } from '@src/weapons/Weapon';

export class BurstDynamicLevel implements BurstLevel {
    private readonly counts: ReadonlyArray<number>;
    private currentLevel: number;

    constructor(currentLevel: number = 1) {
        this.counts = [2, 4, 6, 8, 10, 12];
        this.setLevel(currentLevel, 1);
    }

    public get count(): number {
        return this.counts[this.currentLevel - 1];
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

            return {
                x: center.x - Math.cos(angle) * radius,
                y: center.y - Math.sin(angle) * radius,
            };
        }
    }

    public incLevel(): void {
        const newLevel = this.currentLevel + 1;
        this.setLevel(newLevel, this.currentLevel);
    }

    private setLevel(level: number, defaultLevel: number): void {
        const newLevel = Math.round(level);
        this.currentLevel =
            newLevel >= 1 && newLevel <= this.counts.length
                ? newLevel
                : defaultLevel;
    }
}
