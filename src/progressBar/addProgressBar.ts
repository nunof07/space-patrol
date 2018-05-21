import { Position } from '@src/core/Position';
import { Size } from '@src/core/Size';
import { ProgressBar } from '@src/progressBar/ProgressBar';
import * as Phaser from 'phaser';

export function addProgressBar(position: Position, size: Size): ProgressBar {
    const complete = new Phaser.Geom.Rectangle(0, 0, size.width, size.height);
    Phaser.Geom.Rectangle.CenterOn(complete, position.x, position.y);
    const bar = Phaser.Geom.Rectangle.Clone(complete);

    return { bar, complete };
}
