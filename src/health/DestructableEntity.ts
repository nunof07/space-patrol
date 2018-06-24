import { Destructable } from '@src/health/Destructable';
import * as Phaser from 'phaser';

export interface DestructableEntity {
    readonly sprite: Phaser.GameObjects.Sprite;
    readonly destructable: Destructable;
}
