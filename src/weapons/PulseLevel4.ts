import { Position } from '@src/core/Position';
import { cockpit } from '@src/player/cockpit';
import { PulseLevel } from '@src/weapons/PulseLevel';
import { Weapon } from '@src/weapons/Weapon';

export class PulseLevel4 implements PulseLevel {
    public get count(): number {
        return 6;
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
        if (index < 2) {
            return -45;
        }

        if (index > 3) {
            return 45;
        }

        return 0;
    }
}
