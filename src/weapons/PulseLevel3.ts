import { Position } from '@src/core/Position';
import { cockpit } from '@src/player/cockpit';
import { PulseLevel } from '@src/weapons/PulseLevel';
import { Weapon } from '@src/weapons/Weapon';

export class PulseLevel3 implements PulseLevel {
    public get count(): number {
        return 4;
    }

    public position(index: number, weapon: Weapon): Position {
        const center = cockpit(weapon.player.group);

        return {
            x: center.x + (index % 2 === 0 ? -1 : 1) * 12,
            y: center.y,
        };
    }

    public angle(index: number, _weapon: Weapon): number {
        if (index < 2) {
            return 0;
        }

        return index % 2 === 0 ? -45 : 45;
    }
}
