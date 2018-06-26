import { Scalar } from '@src/core/Scalar';

export class Score implements Scalar<number> {
    private val: number;

    constructor() {
        this.val = 0;
    }

    public get value(): number {
        return this.val;
    }

    public inc(amount: number): void {
        this.val += amount;
    }

    public reset(): void {
        this.val = 0;
    }
}
