import { addBackground } from '@src/sprites/addBackground';
import * as Phaser from 'phaser';

export class Boot extends Phaser.Scene {
    public preload(): void {
        this.load.pack('manifest', 'manifest.json', 'general');
    }

    public create(): void {
        addBackground(this, 'stars-black');
    }
}
