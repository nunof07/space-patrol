import { groupFollowPointer } from '@src/input/groupFollowPointer';
import { setupCamerasResize } from '@src/scene/setupCamerasResize';
import { addBackground } from '@src/sprites/addBackground';
import { addPlayer } from '@src/sprites/addPlayer';
import { spriteChildren } from '@src/sprites/spriteChildren';
import * as Phaser from 'phaser';

export class Game extends Phaser.Scene {
    private background: Phaser.GameObjects.TileSprite;

    constructor() {
        super({ key: 'game' });
    }

    public preload(): void {
        setupCamerasResize(this);
    }

    public create(): void {
        this.background = addBackground(this, 'stars-black.png');
        groupFollowPointer(this.input, spriteChildren(addPlayer(this)));
        this.events.on('resize', (width: number, height: number) => {
            this.background.setSize(width, height);
        });
    }

    public update(): void {
        this.background.tilePositionY -= 1;
    }
}
