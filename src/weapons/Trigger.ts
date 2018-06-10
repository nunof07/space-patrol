import { Component } from '@src/core/Component';
import { canFire } from '@src/weapons/canFire';
import * as Phaser from 'phaser';

export class Trigger implements Component {
    private readonly scene: Phaser.Scene;
    private readonly step: number;
    private readonly emitter: Phaser.Events.EventEmitter;
    private lastFired: number;

    constructor(scene: Phaser.Scene, step: number) {
        this.scene = scene;
        this.step = step;
        this.lastFired = 0;
        this.emitter = new Phaser.Events.EventEmitter();
    }

    public update(time: number, _delta: number): void {
        if (canFire(this.scene, time, this.lastFired)) {
            this.emitter.emit('fire');
            this.lastFired = time + this.step;
        }
    }

    public onFire(callback: () => void): void {
        this.emitter.on('fire', callback);
    }
}
