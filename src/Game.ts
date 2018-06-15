import { CompositeSystem } from '@src/core/CompositeSystem';
import { CratesSystem } from '@src/crates/CratesSystem';
import { PauseSystem } from '@src/PauseSystem';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { Background } from '@src/scenario/Background';
import { setupCamerasResize } from '@src/scene/setupCamerasResize';
import { WeaponsSystem } from '@src/weapons/WeaponsSystem';
import * as Phaser from 'phaser';

export class Game extends Phaser.Scene {
    private readonly systems: CompositeSystem;

    constructor() {
        super({ key: 'game' });
        const player = new PlayerSystem(this);
        const weapons = new WeaponsSystem(this, player);
        this.systems = new CompositeSystem([
            new Background(this),
            player,
            weapons,
            new CratesSystem(this, weapons),
            new PauseSystem(this),
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
