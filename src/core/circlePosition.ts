import { Position } from '@src/core/Position';

export function circlePosition(
    center: Position,
    angle: number,
    radius: number
): Position {
    return {
        x: center.x - Math.cos(angle) * radius,
        y: center.y - Math.sin(angle) * radius,
    };
}
