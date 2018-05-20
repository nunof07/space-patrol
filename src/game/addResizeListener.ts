import * as Phaser from 'phaser';

export function addResizeListener(
    game: Phaser.Game,
    windowObj: Window = window
): void {
    windowObj.addEventListener(
        'resize',
        () => {
            game.resize(windowObj.innerWidth, windowObj.innerHeight);
        },
        false
    );
}
