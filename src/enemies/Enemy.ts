import { DestructableComponent } from '@src/health/DestructableComponent';
import { Vitality } from '@src/health/Vitality';
import * as Phaser from 'phaser';

export interface Enemy extends DestructableComponent {
    readonly sprite: Phaser.GameObjects.Sprite;
    readonly vitality: Vitality;
    explode(): void;
}
