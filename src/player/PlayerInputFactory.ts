import { HealthComponent } from '@src/health/HealthComponent';
import { groupFollowPointer } from '@src/input/groupFollowPointer';
import { Player } from '@src/player/Player';
import { spriteChildren } from '@src/sprites/spriteChildren';

export class PlayerInput {
    private readonly scene: Phaser.Scene;
    private readonly player: Player;
    private readonly health: HealthComponent;

    constructor(scene: Phaser.Scene, player: Player, health: HealthComponent) {
        this.scene = scene;
        this.player = player;
        this.health = health;
    }

    public setup(): void {
        groupFollowPointer(
            this.scene.input,
            spriteChildren(this.player.group),
            0,
            () => this.health.health().vitality.isAlive()
        );
    }
}
