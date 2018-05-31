import { addHealthBar } from '@src/healthBar/addHealthBar';
import { HealthBar } from '@src/healthBar/HealthBar';
import { renderHealthBar } from '@src/healthBar/renderHealthBar';
import { groupFollowPointer } from '@src/input/groupFollowPointer';
import { addPlayer } from '@src/player/addPlayer';
import { addBackground } from '@src/scenario/addBackground';
import { setupCamerasResize } from '@src/scene/setupCamerasResize';
import { spriteChildren } from '@src/sprites/spriteChildren';
import * as Phaser from 'phaser';

export class Game extends Phaser.Scene {
    private graphics: Phaser.GameObjects.Graphics;
    private background: Phaser.GameObjects.TileSprite;
    private player: Phaser.GameObjects.Group;
    private healthBar: HealthBar;

    constructor() {
        super({ key: 'game' });
    }

    public preload(): void {
        setupCamerasResize(this);
    }

    public create(): void {
        this.graphics = this.add.graphics();
        this.graphics.depth = 800;
        this.background = addBackground(this, 'scenario/stars-black.png');
        this.player = addPlayer(this);
        this.healthBar = addHealthBar(spriteChildren(this.player)[0], 2.5);
        groupFollowPointer(this.input, spriteChildren(this.player));
        this.events.on('resize', (width: number, height: number) => {
            this.background.setSize(width, height);
        });
    }

    public update(): void {
        this.graphics.clear();
        this.background.tilePositionY -= 1;
        renderHealthBar(this.graphics, this.healthBar);
    }
}
