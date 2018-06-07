import * as Phaser from 'phaser';

export function onPointerMove(
    input: Phaser.Input.InputPlugin,
    callback: (pointer: Phaser.Input.Pointer) => void,
    conditional: (pointer: Phaser.Input.Pointer) => boolean = () => true
): void {
    input.on(
        'pointermove',
        (pointer: Phaser.Input.Pointer): void => {
            if (conditional(pointer)) {
                callback(pointer);
            }
        }
    );
}
