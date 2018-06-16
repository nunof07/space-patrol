import { System } from '@src/core/System';
import { CratesSystem } from '@src/crates/CratesSystem';
import { Powerup } from '@src/crates/Powerup';
import { PowerupFactory } from '@src/crates/PowerupFactory';
import { PowerupPlayerCollider } from '@src/crates/PowerupPlayerCollider';
import * as Phaser from 'phaser';

export class PowerupSystem implements System {
    private readonly scene: Phaser.Scene;
    private readonly crates: CratesSystem;
    private readonly collider: PowerupPlayerCollider;
    private powerups: ReadonlyArray<Powerup>;

    constructor(
        scene: Phaser.Scene,
        crates: CratesSystem,
        collider: PowerupPlayerCollider
    ) {
        this.scene = scene;
        this.crates = crates;
        this.collider = collider;
        this.powerups = [];
    }

    public create(): void {
        this.crates.onCrateExploded(crate => {
            const powerup = new PowerupFactory(this.scene, crate).create();
            this.powerups = this.powerups.concat(powerup);
            this.collider.setup(powerup);
        });
    }

    public update(time: number, delta: number): void {
        this.powerups.forEach(powerup => {
            powerup.update(time, delta);
        });
        this.powerups = this.powerups.filter(powerup => powerup.isAlive);
    }
}
