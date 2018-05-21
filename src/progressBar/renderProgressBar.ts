import { ProgressBar } from '@src/progressBar/ProgressBar';
import * as Phaser from 'phaser';

export function renderProgressBar(
    graphics: Phaser.GameObjects.Graphics,
    bar: ProgressBar
): void {
    graphics.strokeRectShape(bar.bar).fillRectShape(bar.complete);
}
