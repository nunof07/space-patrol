import { System } from '@src/core/System';
import { Health } from '@src/health/Health';
import { HealthSystem } from '@src/health/HealthSystem';
import { Hitpoints } from '@src/health/Hitpoints';
import { groupFollowPointer } from '@src/input/groupFollowPointer';
import { addPlayer } from '@src/player/addPlayer';
import { switchShield } from '@src/player/switchShield';
import { spriteChildren } from '@src/sprites/spriteChildren';
import * as Phaser from 'phaser';

export class Player implements System {
    private readonly scene: Phaser.Scene;
    private readonly health: HealthSystem;
    private player: Phaser.GameObjects.Group;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.health = new HealthSystem(
            scene,
            () => spriteChildren(this.player)[0],
            new Health(new Hitpoints(100, 100), new Hitpoints(100, 100))
        );
    }

    public create(): void {
        this.player = addPlayer(this.scene);
        groupFollowPointer(this.scene.input, spriteChildren(this.player));
        this.health.create();
        this.scene.input.on('pointerup', () => {
            this.health.hit(25);
            switchShield(this.health.health(), spriteChildren(this.player));
        });
    }

    public update(): void {
        this.health.update();
    }
}
