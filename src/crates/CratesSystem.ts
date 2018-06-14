import { System } from '@src/core/System';
import { Crate } from '@src/crates/Crate';
import { CrateFactory } from '@src/crates/CrateFactory';
import { updateCrates } from '@src/crates/updateCrates';
import * as Phaser from 'phaser';

export class CratesSystem implements System {
    private readonly scene: Phaser.Scene;
    private readonly factory: CrateFactory;
    private crates: ReadonlyArray<Crate>;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.factory = new CrateFactory(scene);
        this.crates = [];
    }

    public create(): void {
        this.scene.time.addEvent({
            delay: 2000,
            loop: true,
            callback: () => {
                this.crates = this.crates.concat(this.factory.create());
            },
        });
    }

    public update(time: number, delta: number): void {
        this.crates = updateCrates(this.crates, time, delta);
    }
}
