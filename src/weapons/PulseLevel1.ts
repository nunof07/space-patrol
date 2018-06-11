import { Position } from '@src/core/Position';
import { cockpit } from '@src/player/cockpit';
import { PulseLevel } from '@src/weapons/PulseLevel';
import { Weapon } from '@src/weapons/Weapon';

export class PulseLevel1 implements PulseLevel {
    public get count(): number {
        return 1;
    }

    public position(_index: number, weapon: Weapon): Position {
        return cockpit(weapon.player.group);
    }
}
