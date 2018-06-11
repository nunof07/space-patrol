import { Player } from '@src/player/Player';
import { Bullet } from '@src/weapons/Bullet';
import * as Phaser from 'phaser';

export class Weapon {
    private readonly playerImpl: Player;
    private readonly bulletsImpl: ReadonlyArray<Bullet>;
    private readonly groupImpl: Phaser.GameObjects.Group;

    constructor(
        player: Player,
        bullets: ReadonlyArray<Bullet>,
        group: Phaser.GameObjects.Group
    ) {
        this.playerImpl = player;
        this.bulletsImpl = bullets;
        this.groupImpl = group;
    }

    public get player(): Player {
        return this.playerImpl;
    }

    public get bullets(): ReadonlyArray<Bullet> {
        return this.bulletsImpl;
    }

    public get group(): Phaser.GameObjects.Group {
        return this.groupImpl;
    }
}
