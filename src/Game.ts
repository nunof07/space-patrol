import { Composite } from '@src/core/Composite';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { Background } from '@src/scenario/Background';
import { setupCamerasResize } from '@src/scene/setupCamerasResize';
import * as Phaser from 'phaser';

export class Game extends Phaser.Scene {
    private readonly systems: Composite;

    constructor() {
        super({ key: 'game' });
        this.systems = new Composite([
            new Background(this),
            new PlayerSystem(this),
        ]);
    }

    public preload(): void {
        setupCamerasResize(this);
    }

    public create(): void {
        this.systems.create();
    }

    public update(time: number, delta: number): void {
        this.systems.update(time, delta);
    }
}
