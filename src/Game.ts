import { followPointer } from '@src/input/followPointer';
import { setupCamerasResize } from '@src/scene/setupCamerasResize';
import { addBackground } from '@src/sprites/addBackground';
import { addPlayer } from '@src/sprites/addPlayer';
import * as Phaser from 'phaser';

export class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'game' });
    }

    public preload(): void {
        setupCamerasResize(this);
    }

    public create(): void {
        const bg = addBackground(this, 'stars-black');
        followPointer(this.input, addPlayer(this, 'ship-red'));
        this.events.on('resize', (width: number, height: number) => {
            bg.setSize(width, height);
        });
    }
}
