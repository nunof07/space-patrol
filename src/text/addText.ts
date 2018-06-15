import { Position } from '@src/core/Position';
import * as Phaser from 'phaser';

export function addText(
    scene: Phaser.Scene,
    position: Position,
    text: string,
    size: number
): Phaser.GameObjects.BitmapText {
    const bitmapText = scene.add.bitmapText(
        position.x,
        position.y,
        'nescyrillic',
        text,
        size
    );
    bitmapText.depth = 5000;
    bitmapText.setOrigin(0.5, 0.5);

    return bitmapText;
}
