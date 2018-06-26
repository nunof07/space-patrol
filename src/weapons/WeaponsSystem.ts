import { CompositeSystem } from '@src/core/CompositeSystem';
import { Restartable } from '@src/core/Restartable';
import { System } from '@src/core/System';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { BurstSystem } from '@src/weapons/burst/BurstSystem';
import { PulseSystem } from '@src/weapons/pulse/PulseSystem';
import * as Phaser from 'phaser';

export class WeaponsSystem implements System, Restartable {
    private readonly systems: CompositeSystem;
    private readonly pulseImpl: PulseSystem;
    private readonly burstImpl: BurstSystem;

    constructor(scene: Phaser.Scene, player: PlayerSystem) {
        this.pulseImpl = new PulseSystem(scene, player);
        this.burstImpl = new BurstSystem(scene, player);
        this.systems = new CompositeSystem([this.pulseImpl, this.burstImpl]);
    }

    public create(): void {
        this.systems.create();
    }

    public update(time: number, delta: number): void {
        this.systems.update(time, delta);
    }

    public get pulse(): PulseSystem {
        return this.pulseImpl;
    }

    public get burst(): BurstSystem {
        return this.burstImpl;
    }

    public restart(): void {
        this.pulseImpl.restart();
        this.burstImpl.restart();
    }
}
