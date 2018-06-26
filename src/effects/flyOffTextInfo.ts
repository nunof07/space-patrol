import { Position } from '@src/core/Position';

export function flyOffTextInfo(info: {
    position: Position;
    down: boolean;
    size?: number;
    tint?: number;
    duration?: number;
    distance?: number;
}): {
    position: Position;
    down: boolean;
    size: number;
    tint?: number;
    duration: number;
    distance: number;
} {
    return {
        position: info.position,
        down: info.down,
        size: info.size !== undefined ? info.size : 16,
        duration: info.duration !== undefined ? info.duration : 400,
        distance: info.distance !== undefined ? info.distance : 100,
        tint: info.tint,
    };
}
