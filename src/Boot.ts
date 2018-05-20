import { addBackground } from '@src/sprites/addBackground';
import * as Phaser from 'phaser';

export class Boot extends Phaser.Scene {
    public preload(): void {
        this.load.image('stars', 'images/stars-black.png');
    }

    public create(): void {
        addBackground(this, 'stars');
    }
}
