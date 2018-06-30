import { Scalar } from '@src/core/Scalar';
import { MeteorType } from '@src/enemies/meteor/MeteorType';

export interface MeteorWaveInfo {
    readonly composition: MeteorType;
    readonly maxSize: number;
    readonly speed: Scalar<number>;
}
