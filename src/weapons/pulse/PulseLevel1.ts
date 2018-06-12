import { Position } from '@src/core/Position';
import { cockpit } from '@src/player/cockpit';
import { PulseLevel } from '@src/weapons/pulse/PulseLevel';
import { Weapon } from '@src/weapons/Weapon';

export class PulseLevel1 implements PulseLevel {
    public get count(): number {
        return 1;
    }

    public position(_index: number, weapon: Weapon): Position {
        return cockpit(weapon.player.group);
    }

    public angle(_index: number, _weapon: Weapon): number {
        return 0;
    }
}
