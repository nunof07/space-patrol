import { RectangleWithStyle } from '@src/graphics/RectangleWithStyle';
import * as Phaser from 'phaser';

export interface HealthBar {
    readonly parent: Phaser.GameObjects.Sprite;
    readonly background: RectangleWithStyle;
    readonly filled: RectangleWithStyle;
}
