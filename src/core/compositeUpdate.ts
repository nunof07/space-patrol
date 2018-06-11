export function compositeUpdate(
    items: ReadonlyArray<{ update(time: number, delta: number): void }>,
    time: number,
    delta: number
): void {
    items.forEach(item => {
        item.update(time, delta);
    });
}
