import { mainCameraCenter } from '@src/scene/mainCameraCenter';
import { addText } from '@src/text/addText';
import * as Phaser from 'phaser';

export class Paused extends Phaser.Scene {
    constructor() {
        super({ key: 'paused' });
    }

    public create(): void {
        addText(this, mainCameraCenter(this), 'PAUSED', 32);
        this.input.keyboard.on('keydown_ESC', () => {
            this.scene.resume('game');
            this.scene.stop('paused');
        });
    }
}
