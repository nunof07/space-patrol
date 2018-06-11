import { Position } from '@src/core/Position';
import { cockpit } from '@src/player/cockpit';
import { PulseLevel } from '@src/weapons/PulseLevel';
import { Weapon } from '@src/weapons/Weapon';

export class PulseLevel4 implements PulseLevel {
    private readonly angles: ReadonlyArray<number>;

    constructor(angles: ReadonlyArray<number> = [-45, -45, 0, 0, 45, 45]) {
        this.angles = angles;
    }

    public get count(): number {
        return this.angles.length;
    }

    public position(index: number, weapon: Weapon): Position {
        const center = cockpit(weapon.player.group);
        const radius = 32;
        const separation = Math.PI / this.count;
        const halfIndex = index * (1 / this.count);
        const angle = (index + halfIndex) * separation;

        return {
            x: center.x - Math.cos(angle) * radius,
            y: center.y - Math.sin(angle) * radius,
        };
    }

    public angle(index: number, _weapon: Weapon): number {
        return this.angles[index];
    }
}
