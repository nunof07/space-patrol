import { Scalar } from '@src/core/Scalar';
import { MeteorType } from '@src/enemies/meteor/MeteorType';
import * as Random from 'random-js';

export interface MeteorWaveInfo {
    readonly count: number;
    readonly composition: MeteorType;
    readonly engine: Random.Engine;
    readonly delay: Scalar<number>;
}
