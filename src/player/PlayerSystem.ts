import { System } from '@src/core/System';
import { Health } from '@src/health/Health';
import { HealthSystem } from '@src/health/HealthSystem';
import { Hitpoints } from '@src/health/Hitpoints';
import { groupFollowPointer } from '@src/input/groupFollowPointer';
import { addPlayer } from '@src/player/addPlayer';
import { hitPlayer } from '@src/player/hitPlayer';
import { spriteByName } from '@src/sprites/spriteByName';
import { spriteChildren } from '@src/sprites/spriteChildren';
import * as Phaser from 'phaser';

function damagedPart(
    player: Phaser.GameObjects.Group,
    health: Health
): Phaser.GameObjects.Sprite {
    const part =
        health.shield.percentage > 0.666
            ? 'shield3'
            : health.shield.percentage > 0.333
                ? 'shield2'
                : health.shield.percentage > 0
                    ? 'shield1'
                    : 'cockpit';

    return spriteByName(spriteChildren(player), part)[0];
}

export class PlayerSystem implements System {
    private readonly scene: Phaser.Scene;
    private readonly health: HealthSystem;
    private group: Phaser.GameObjects.Group;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.health = new HealthSystem(
            scene,
            () => spriteChildren(this.group)[0],
            new Health(new Hitpoints(100, 100), new Hitpoints(100, 100))
        );
    }

    public create(): void {
        this.group = addPlayer(this.scene);
        groupFollowPointer(this.scene.input, spriteChildren(this.group));
        this.health.create();
        this.scene.input.on('pointerup', () => {
            const part = damagedPart(this.group, this.health.health());
            hitPlayer(this.scene, this, {
                damage: 25,
                part,
                position: part,
            });
        });
    }

    public update(): void {
        this.health.update();
    }
}
