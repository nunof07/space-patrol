import * as Phaser from 'phaser';

export function config(): GameConfig {
    return {
        type: Phaser.AUTO,
        parent: 'game',
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                debug: true,
            },
        },
    };
}
