import { Position } from '@src/core/Position';
import { PulseLevel } from '@src/weapons/PulseLevel';
import { PulseLevel4 } from '@src/weapons/PulseLevel4';
import { Weapon } from '@src/weapons/Weapon';

export class PulseLevel5 implements PulseLevel {
    private readonly level: PulseLevel;

    constructor() {
        this.level = new PulseLevel4([
            -60,
            -60,
            -30,
            -30,
            0,
            0,
            30,
            30,
            60,
            60,
        ]);
    }

    public get count(): number {
        return this.level.count;
    }

    public position(index: number, weapon: Weapon): Position {
        return this.level.position(index, weapon);
    }

    public angle(index: number, weapon: Weapon): number {
        return this.level.angle(index, weapon);
    }
}
