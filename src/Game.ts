import { Composite } from '@src/core/Composite';
import { Player } from '@src/player/Player';
import { Background } from '@src/scenario/Background';
import { setupCamerasResize } from '@src/scene/setupCamerasResize';
import * as Phaser from 'phaser';

export class Game extends Phaser.Scene {
    private readonly systems: Composite;

    constructor() {
        super({ key: 'game' });
        this.systems = new Composite([new Player(this), new Background(this)]);
    }

    public preload(): void {
        setupCamerasResize(this);
    }

    public create(): void {
        this.systems.create();
    }

    public update(): void {
        this.systems.update();
    }
}
