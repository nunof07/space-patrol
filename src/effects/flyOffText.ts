import { Position } from '@src/core/Position';
import { addText } from '@src/text/addText';
import * as Phaser from 'phaser';

export function flyOffText(
    scene: Phaser.Scene,
    text: string,
    position: Position,
    down: boolean
): void {
    const textObj = addText(scene, position, text, 16);
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
