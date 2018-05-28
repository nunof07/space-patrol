import { groupFollowPointer } from '@src/input/groupFollowPointer';
import { setupCamerasResize } from '@src/scene/setupCamerasResize';
import { addBackground } from '@src/sprites/addBackground';
import { addPlayer } from '@src/sprites/addPlayer';
import { spriteChildren } from '@src/sprites/spriteChildren';
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
        groupFollowPointer(this.input, spriteChildren(addPlayer(this)));
        this.events.on('resize', (width: number, height: number) => {
            bg.setSize(width, height);
        });
    }
}
