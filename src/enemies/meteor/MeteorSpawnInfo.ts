import { MeteorSize } from '@src/enemies/meteor/MeteorSize';
import { MeteorType } from '@src/enemies/meteor/MeteorType';

export interface MeteorSpawnInfo {
    readonly size: MeteorSize;
    readonly composition: MeteorType;
    readonly startX: number;
    readonly endX: number;
    readonly speed: number;
}
