export function groupSetXY(
    group: ReadonlyArray<{ x: number; y: number }>,
    x: number,
    y: number,
    index: number
): void {
    if (group.length <= index) {
        throw new RangeError('index out of group range');
    }
    const diff = {
        x: group[index].x - x,
        y: group[index].y - y,
    };

    group.forEach(item => {
        item.x = item.x - diff.x;
        item.y = item.y - diff.y;
    });
}
