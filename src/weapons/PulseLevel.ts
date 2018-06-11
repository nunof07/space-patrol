import { Position } from '@src/core/Position';
import { Weapon } from '@src/weapons/Weapon';

export interface PulseLevel {
    count: number;
    position(index: number, weapon: Weapon): Position;
    angle(index: number, weapon: Weapon): number;
}
