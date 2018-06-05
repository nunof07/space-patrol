import { Position } from '@src/core/Position';
import * as Phaser from 'phaser';

export function flyOffText(
    scene: Phaser.Scene,
    text: string,
    position: Position,
    down: boolean
): void {
    const textObj = scene.add.text(position.x, position.y, text, {
        color: '#ffffff',
        fontSize: 16,
        fontFamily: 'Arial',
    });
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
