import { groupFollowPointer } from '@src/input/groupFollowPointer';
import { addPlayer } from '@src/player/addPlayer';
import { addBackground } from '@src/scenario/addBackground';
import { setupCamerasResize } from '@src/scene/setupCamerasResize';
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
        this.background = addBackground(this, 'scenario/stars-black.png');
        groupFollowPointer(this.input, spriteChildren(addPlayer(this)));
        this.events.on('resize', (width: number, height: number) => {
            this.background.setSize(width, height);
        });
    }

    public update(): void {
        this.background.tilePositionY -= 1;
    }
}
