import { System } from '@src/core/System';
import { addHealthBar } from '@src/healthBar/addHealthBar';
import { addShieldBar } from '@src/healthBar/addShieldBar';
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
    private shieldBar: HealthBar;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public create(): void {
        this.graphics = this.scene.add.graphics();
        this.graphics.depth = 800;
        this.player = addPlayer(this.scene);
        const children = spriteChildren(this.player);
        this.healthBar = addHealthBar(children[0], 2.5);
        this.shieldBar = addShieldBar(children[0], 2.5);
        groupFollowPointer(this.scene.input, children);
    }

    public update(): void {
        this.graphics.clear();
        renderHealthBar(this.graphics, this.healthBar);
        renderHealthBar(this.graphics, this.shieldBar, 1.72);
    }
}
