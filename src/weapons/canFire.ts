import * as Phaser from 'phaser';

export function canFire(
    scene: Phaser.Scene,
    time: number,
    lastFired: number
): boolean {
    return scene.input.activePointer.primaryDown && time > lastFired;
}
