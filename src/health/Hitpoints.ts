export class Hitpoints {
    private readonly maxN: number;
    private readonly currentN: number;

    constructor(max: number, current: number) {
        this.maxN = max;
        this.currentN = current;
    }

    public get max(): number {
        return this.maxN;
    }

    public get current(): number {
        return this.currentN;
    }

    public get percentage(): number {
        return this.current / this.max;
    }
}
