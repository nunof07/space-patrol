export interface System {
    create(): void;
    update(time: number, delta: number): void;
}
