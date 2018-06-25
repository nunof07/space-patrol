import { Scalar } from '@src/core/Scalar';
import * as Random from 'random-js';

export class RandomInt implements Scalar<number> {
    private readonly engine: Random.Engine;
    private readonly min: number;
    private readonly max: number;

    constructor(engine: Random.Engine, min: number, max: number) {
        this.engine = engine;
        this.min = min;
        this.max = max;
    }

    public get value(): number {
        return Random.integer(this.min, this.max)(this.engine);
    }
}
