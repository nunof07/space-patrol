import { Position } from '@src/core/Position';
import { PulseLevel } from '@src/weapons/pulse/PulseLevel';
import { PulseLevel1 } from '@src/weapons/pulse/PulseLevel1';
import { PulseLevel2 } from '@src/weapons/pulse/PulseLevel2';
import { PulseLevel3 } from '@src/weapons/pulse/PulseLevel3';
import { PulseLevel4 } from '@src/weapons/pulse/PulseLevel4';
import { PulseLevel5 } from '@src/weapons/pulse/PulseLevel5';
import { PulseLevel6 } from '@src/weapons/pulse/PulseLevel6';
import { Weapon } from '@src/weapons/Weapon';
import { WeaponLevel } from '@src/weapons/WeaponLevel';
import { weaponNewLevel } from '@src/weapons/weaponNewLevel';

export class PulseDynamicLevel implements PulseLevel, WeaponLevel {
    private readonly levels: ReadonlyArray<PulseLevel>;
    private currentLevelImpl: number;

    constructor(level: number = 1) {
        this.levels = [
            new PulseLevel1(),
            new PulseLevel2(),
            new PulseLevel3(),
            new PulseLevel4(),
            new PulseLevel5(),
            new PulseLevel6(),
        ];
        this.currentLevelImpl = weaponNewLevel(level, 1, this.levels.length);
    }

    public position(index: number, weapon: Weapon): Position {
        return this.current().position(index, weapon);
    }

    public angle(index: number, weapon: Weapon): number {
        return this.current().angle(index, weapon);
    }

    public incLevel(): void {
        this.currentLevelImpl = weaponNewLevel(
            this.currentLevelImpl + 1,
            this.currentLevelImpl,
            this.levels.length
        );
    }

    public get count(): number {
        return this.current().count;
    }

    public get currentLevel(): number {
        return this.currentLevelImpl;
    }

    private current(): PulseLevel {
        return this.levels[this.currentLevelImpl - 1];
    }
}
