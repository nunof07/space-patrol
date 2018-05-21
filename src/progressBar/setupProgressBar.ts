import { addProgressBar } from '@src/progressBar/addProgressBar';
import { renderProgressBar } from '@src/progressBar/renderProgressBar';
import { updateProgressBar } from '@src/progressBar/updateProgressBar';
import { mainCameraCenter } from '@src/scene/mainCameraCenter';
import * as Phaser from 'phaser';

export function setupProgressBar(scene: Phaser.Scene): void {
    const graphics = scene.add.graphics({
        fillStyle: {
            color: 0xffffff,
        },
        lineStyle: {
            width: 2,
            color: 0xffffff,
        },
    });
    const size = {
        width: scene.cameras.main.width / 3,
        height: scene.cameras.main.width / 30,
    };
    let bar = addProgressBar(mainCameraCenter(scene), size);
    scene.load.on('progress', (progress: number) => {
        bar = updateProgressBar(bar, progress);
        renderProgressBar(graphics, bar);
    });
    scene.load.on('complete', () => {
        graphics.destroy();
    });
}
