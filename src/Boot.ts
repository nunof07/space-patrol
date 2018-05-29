import { setupProgressBar } from '@src/progressBar/setupProgressBar';
import { setupCamerasResize } from '@src/scene/setupCamerasResize';
import * as Phaser from 'phaser';

export class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'boot' });
    }

    public preload(): void {
        setupProgressBar(this);
        setupCamerasResize(this);
        this.load.on('complete', () => {
            this.scene.start('game');
        });
        this.load.pack('manifest', 'manifest.json');
    }
}
