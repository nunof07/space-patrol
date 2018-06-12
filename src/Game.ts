import { CompositeSystem } from '@src/core/CompositeSystem';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { Background } from '@src/scenario/Background';
import { setupCamerasResize } from '@src/scene/setupCamerasResize';
import { PulseSystem } from '@src/weapons/pulse/PulseSystem';
import * as Phaser from 'phaser';

export class Game extends Phaser.Scene {
    private readonly systems: CompositeSystem;

    constructor() {
        super({ key: 'game' });
        const player = new PlayerSystem(this);
        this.systems = new CompositeSystem([
            new Background(this),
            player,
            new PulseSystem(this, player),
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
