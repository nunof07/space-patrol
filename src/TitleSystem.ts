import { System } from '@src/core/System';
import { mainCameraCenter } from '@src/scene/mainCameraCenter';
import { addText } from '@src/text/addText';
import * as Phaser from 'phaser';

export class TitleSystem implements System {
    private readonly scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public create(): void {
        const text = addText(
            this.scene,
            mainCameraCenter(this.scene),
            'SPACE PATROL',
            64
        );
        text.alpha = 0;
        this.scene.tweens.add({
            targets: text,
            alpha: 1,
            duration: 4000,
            yoyo: true,
            ease: 'Quad.easeIn',
            onComplete: () => {
                text.destroy();
            },
        });
    }

    public update(_time: number, _delta: number): void {
        // nothing to do
    }
}
