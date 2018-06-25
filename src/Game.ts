import { CompositeSystem } from '@src/core/CompositeSystem';
import { System } from '@src/core/System';
import { CratesSystem } from '@src/crates/CratesSystem';
import { PowerupPlayerCollider } from '@src/crates/PowerupPlayerCollider';
import { PowerupSystem } from '@src/crates/PowerupSystem';
import { MeteorWaveFactory } from '@src/enemies/meteor/MeteorWaveFactory';
import { WaveSystem } from '@src/enemies/WaveSystem';
import { GameOverSystem } from '@src/GameOverSystem';
import { MusicSystem } from '@src/MusicSystem';
import { PauseSystem } from '@src/PauseSystem';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { engine } from '@src/random/engine';
import { RandomInt } from '@src/random/RandomInt';
import { Background } from '@src/scenario/Background';
import { ScenarioSystem } from '@src/scenario/ScenarioSystem';
import { setupCamerasResize } from '@src/scene/setupCamerasResize';
import { TitleSystem } from '@src/TitleSystem';
import { WeaponsSystem } from '@src/weapons/WeaponsSystem';
import * as Phaser from 'phaser';
import * as Random from 'random-js';

export class Game extends Phaser.Scene {
    private readonly systems: CompositeSystem;

    constructor() {
        super({ key: 'game' });
        this.systems = new CompositeSystem(this.createSystems());
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

    private createSystems(): ReadonlyArray<System> {
        const random = engine();
        const player = new PlayerSystem(this);
        const weapons = new WeaponsSystem(this, player);
        const crates = new CratesSystem(
            this,
            weapons,
            new RandomInt(random, 10000, 20000)
        );
        const powerups = this.createPowerupSystem(player, weapons, crates);

        return [
            new Background(this),
            player,
            weapons,
            crates,
            powerups,
            new PauseSystem(this),
            new MusicSystem(this),
            new TitleSystem(this),
            new ScenarioSystem(this),
            this.createWaveSystem(player, weapons, random),
            new GameOverSystem(this, player),
        ];
    }

    private createPowerupSystem(
        player: PlayerSystem,
        weapons: WeaponsSystem,
        crates: CratesSystem
    ): PowerupSystem {
        return new PowerupSystem(
            this,
            crates,
            new PowerupPlayerCollider(this, player, weapons)
        );
    }

    private createWaveSystem(
        player: PlayerSystem,
        weapons: WeaponsSystem,
        random: Random.Engine
    ): WaveSystem {
        return new WaveSystem(
            this,
            new MeteorWaveFactory(this, player, weapons, random),
            new RandomInt(random, 3000, 6000)
        );
    }
}
