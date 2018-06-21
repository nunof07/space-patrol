import { CompositeSystem } from '@src/core/CompositeSystem';
import { CratesSystem } from '@src/crates/CratesSystem';
import { PowerupPlayerCollider } from '@src/crates/PowerupPlayerCollider';
import { PowerupSystem } from '@src/crates/PowerupSystem';
import { MusicSystem } from '@src/MusicSystem';
import { PauseSystem } from '@src/PauseSystem';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { Background } from '@src/scenario/Background';
import { ScenarioSystem } from '@src/scenario/ScenarioSystem';
import { setupCamerasResize } from '@src/scene/setupCamerasResize';
import { TitleSystem } from '@src/TitleSystem';
import { WeaponsSystem } from '@src/weapons/WeaponsSystem';
import * as Phaser from 'phaser';

export class Game extends Phaser.Scene {
    private readonly systems: CompositeSystem;

    constructor() {
        super({ key: 'game' });
        const player = new PlayerSystem(this);
        const weapons = new WeaponsSystem(this, player);
        const crates = new CratesSystem(this, weapons);
        const powerups = new PowerupSystem(
            this,
            crates,
            new PowerupPlayerCollider(this, player, weapons)
        );
        this.systems = new CompositeSystem([
            new Background(this),
            player,
            weapons,
            crates,
            powerups,
            new PauseSystem(this),
            new MusicSystem(this),
            new TitleSystem(this),
            new ScenarioSystem(this),
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
