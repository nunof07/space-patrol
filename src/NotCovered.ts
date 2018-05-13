export class NotCovered {
    private readonly value: number;

    constructor(value: number) {
        this.value = value;
    }

    public add(val: number): number {
        return this.value + val;
    }
}
