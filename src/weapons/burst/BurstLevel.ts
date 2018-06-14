import { Position } from '@src/core/Position';
import { Weapon } from '@src/weapons/Weapon';

export interface BurstLevel {
    count: number;
    position(index: number, weapon: Weapon): Position;
    destination(index: number, weapon: Weapon): Position;
}
