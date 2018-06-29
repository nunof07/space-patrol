import { Position } from '@src/core/Position';

export interface EnemyBulletInfo {
    readonly startPosition: Position;
    readonly lifespan: number;
    readonly speed: number;
    readonly angle: number;
}
