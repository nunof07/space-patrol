import { CompositeSystem } from '@src/core/CompositeSystem';
import { Restartable } from '@src/core/Restartable';
import { System } from '@src/core/System';
import { CratesSystem } from '@src/crates/CratesSystem';
import { PowerupPlayerCollider } from '@src/crates/PowerupPlayerCollider';
import { PowerupSystem } from '@src/crates/PowerupSystem';
import { BlueWaveFactory } from '@src/enemies/blue/BlueWaveFactory';
import { MeteorWaveFactory } from '@src/enemies/meteor/MeteorWaveFactory';
import { WaveSystem } from '@src/enemies/WaveSystem';
import { GameOverSystem } from '@src/GameOverSystem';
import { HighscoreSystem } from '@src/highscore/HighscoreSystem';
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
import { RandomWaveFactory } from '@src/enemies/RandomWaveFactory';

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
        const crates = this.createCratesSystem(weapons, random);
        const powerups = this.createPowerupSystem(player, weapons, crates);
        const waves = this.createWaveSystem(player, weapons, random);
        const highscore = new HighscoreSystem(this, waves);
        let restartables: ReadonlyArray<Restartable>;
        restartables = [crates, waves, weapons, highscore, player];

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
            waves,
            new GameOverSystem(this, player, restartables),
            highscore,
        ];
    }

    private createCratesSystem(
        weapons: WeaponsSystem,
        random: Random.Engine
    ): CratesSystem {
        return new CratesSystem(
            this,
            weapons,
            new RandomInt(random, 10000, 20000)
        );
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
            new RandomWaveFactory(
                [
                    new MeteorWaveFactory(this, player, weapons, random),
                    new BlueWaveFactory(this, player, weapons, random),
                ],
                random
            ),
            new RandomInt(random, 3000, 6000)
        );
    }
}
