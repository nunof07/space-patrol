import { Scalar } from '@src/core/Scalar';
import { Wave } from '@src/enemies/Wave';
import { WaveFactory } from '@src/enemies/WaveFactory';
import { RandomInt } from '@src/random/RandomInt';
import * as Random from 'random-js';

export class RandomWaveFactory implements WaveFactory {
    private readonly factories: ReadonlyArray<WaveFactory>;
    private readonly index: Scalar<number>;

    constructor(factories: ReadonlyArray<WaveFactory>, engine: Random.Engine) {
        this.factories = factories;
        this.index = new RandomInt(engine, 0, this.factories.length - 1);
    }

    public create(): Wave {
        return this.factories[this.index.value].create();
    }

    public restart(): void {
        this.factories.forEach(factory => {
            factory.restart();
        });
    }
}
