import { System } from '@src/core/System';
import * as Phaser from 'phaser';

export interface Bullet extends System {
    readonly sprite: Phaser.GameObjects.Sprite;
    readonly lifespan: number;
    readonly damage: number;
    readonly hitAudioKey: string;
    isAlive(): boolean;
    destroy(): void;
}
