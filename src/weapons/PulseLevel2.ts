import { Position } from '@src/core/Position';
import { cockpit } from '@src/player/cockpit';
import { PulseLevel } from '@src/weapons/PulseLevel';
import { Weapon } from '@src/weapons/Weapon';

export class PulseLevel2 implements PulseLevel {
    public get count(): number {
        return 2;
    }

    public position(index: number, weapon: Weapon): Position {
        const center = cockpit(weapon.player.group);

        return {
            x: center.x + (index === 0 ? -1 : 1) * 16,
            y: center.y,
        };
    }
}
