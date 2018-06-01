import { System } from '@src/core/System';
import { addHealthBar } from '@src/healthBar/addHealthBar';
import { HealthBar } from '@src/healthBar/HealthBar';
import { renderHealthBar } from '@src/healthBar/renderHealthBar';
import { groupFollowPointer } from '@src/input/groupFollowPointer';
import { addPlayer } from '@src/player/addPlayer';
import { spriteChildren } from '@src/sprites/spriteChildren';
import * as Phaser from 'phaser';

export class Player implements System {
    private readonly scene: Phaser.Scene;
    private graphics: Phaser.GameObjects.Graphics;
    private player: Phaser.GameObjects.Group;
    private healthBar: HealthBar;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public create(): void {
        this.graphics = this.scene.add.graphics();
        this.graphics.depth = 800;
        this.player = addPlayer(this.scene);
        this.healthBar = addHealthBar(spriteChildren(this.player)[0], 2.5);
        groupFollowPointer(this.scene.input, spriteChildren(this.player));
    }

    public update(): void {
        this.graphics.clear();
        renderHealthBar(this.graphics, this.healthBar);
    }
}
