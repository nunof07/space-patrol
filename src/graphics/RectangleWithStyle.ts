import { FillStyle } from '@src/graphics/FillStyle';
import { LineStyle } from '@src/graphics/LineStyle';
import * as Phaser from 'phaser';

export interface RectangleWithStyle {
    readonly rectangle: Phaser.Geom.Rectangle;
    readonly fill: FillStyle;
    readonly line: LineStyle;
}
