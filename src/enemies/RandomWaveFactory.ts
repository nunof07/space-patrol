import { Factory } from '@src/core/Factory';
import { Scalar } from '@src/core/Scalar';
import { Wave } from '@src/enemies/Wave';
import { RandomInt } from '@src/random/RandomInt';
import * as Random from 'random-js';

export class RandomWaveFactory implements Factory<Wave> {
    private readonly factories: ReadonlyArray<Factory<Wave>>;
    private readonly index: Scalar<number>;

    constructor(
        factories: ReadonlyArray<Factory<Wave>>,
        engine: Random.Engine
    ) {
        this.factories = factories;
        this.index = new RandomInt(engine, 0, this.factories.length - 1);
    }

    public create(): Wave {
        return this.factories[this.index.value].create();
    }
}
