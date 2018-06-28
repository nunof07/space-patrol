import { Factory } from '@src/core/Factory';
import { Scalar } from '@src/core/Scalar';
import { Enemy } from '@src/enemies/Enemy';
import * as Random from 'random-js';

export interface EnemyWaveInfo<TEnemy extends Enemy> {
    readonly count: number;
    readonly engine: Random.Engine;
    readonly delay: Scalar<number>;
    readonly factory: Factory<TEnemy>;
}
