import { Scalar } from '@src/core/Scalar';

export class CachedScalar<T> implements Scalar<T> {
    private readonly scalar: Scalar<T>;
    private cache: ReadonlyArray<T>;

    constructor(scalar: Scalar<T>) {
        this.scalar = scalar;
        this.cache = [];
    }

    public get value(): T {
        if (this.cache.length === 0) {
            this.cache = [this.scalar.value];
        }

        return this.cache[0];
    }
}
