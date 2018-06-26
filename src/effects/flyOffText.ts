import { Position } from '@src/core/Position';
import { flyOffTextInfo } from '@src/effects/flyOffTextInfo';
import { addText } from '@src/text/addText';
import * as Phaser from 'phaser';

export function flyOffText(
    scene: Phaser.Scene,
    text: string,
    info: {
        position: Position;
        down: boolean;
        size?: number;
        tint?: number;
        duration?: number;
        distance?: number;
    }
): void {
    const parsed = flyOffTextInfo(info);
    const textObj = addText(scene, info.position, text, parsed.size);

    if (parsed.tint !== undefined) {
        textObj.tint = parsed.tint;
    }
    scene.tweens.add({
        targets: textObj,
        y: parsed.position.y + (parsed.down ? 1 : -1) * parsed.distance,
        alpha: 0,
        ease: 'Quad.easeInOut',
        duration: parsed.duration,
        onComplete: (): void => {
            textObj.destroy();
        },
    });
}
