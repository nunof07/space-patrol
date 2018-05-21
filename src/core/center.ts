import { Position } from '@src/core/Position';
import { Size } from '@src/core/Size';

export function center(obj: Size): Position {
    return {
        x: obj.width / 2,
        y: obj.height / 2,
    };
}
