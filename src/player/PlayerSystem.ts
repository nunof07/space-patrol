import { System } from '@src/core/System';
import { HealthComponent } from '@src/health/HealthComponent';
import { Player } from '@src/player/Player';
import { PlayerFactory } from '@src/player/PlayerFactory';
import { PlayerHealthFactory } from '@src/player/PlayerHealthFactory';
import { PlayerInput } from '@src/player/PlayerInputFactory';
import * as Phaser from 'phaser';

export class PlayerSystem implements System {
    private readonly scene: Phaser.Scene;
    private playerImpl: Player;
    private healthImpl: HealthComponent;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public create(): void {
        this.playerImpl = new PlayerFactory(this.scene).create();
        this.healthImpl = new PlayerHealthFactory(
            this.scene,
            this.playerImpl
        ).create();
        new PlayerInput(this.scene, this.playerImpl, this.healthImpl).setup();
    }

    public update(time: number, delta: number): void {
        this.healthImpl.update(time, delta);
    }

    public player(): Player {
        return this.playerImpl;
    }

    public health(): HealthComponent {
        return this.healthImpl;
    }
}
