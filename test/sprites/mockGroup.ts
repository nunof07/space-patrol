import { asType } from '@src/core/asType';
import * as Phaser from 'phaser';

export function mockGroup(
    children: ReadonlyArray<{ x: number; y: number }>
): Phaser.GameObjects.Group {
    return asType<Phaser.GameObjects.Group>({
        getChildren: () => children,
    });
}
