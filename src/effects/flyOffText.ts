import { Position } from '@src/core/Position';
import * as Phaser from 'phaser';

export function flyOffText(
    scene: Phaser.Scene,
    text: string,
    position: Position,
    down: boolean
): void {
    const textObj = scene.add.bitmapText(
        position.x,
        position.y,
        'nescyrillic',
        text,
        16
    );
    textObj.depth = 5000;
    textObj.setOrigin(0.5, 0.5);
    scene.tweens.add({
        targets: textObj,
        y: position.y + (down ? 1 : -1) * 100,
        alpha: 0,
        ease: 'Quad.easeInOut',
        duration: 400,
        onComplete: (): void => {
            textObj.destroy();
        },
    });
}
