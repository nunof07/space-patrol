import * as Phaser from 'phaser';

export function config(windowObj: Window = window): GameConfig {
    return {
        type: Phaser.AUTO,
        parent: 'game',
        width: windowObj.innerWidth,
        height: windowObj.innerHeight,
        physics: {
            default: 'arcade',
            arcade: {
                debug: false,
            },
        },
    };
}
