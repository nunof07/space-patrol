import { asType } from '@src/core/asType';
import * as Phaser from 'phaser';

export function groupGet(
    group: Phaser.GameObjects.Group,
    count: number,
    abortWhenLessThanCount: boolean = false
): ReadonlyArray<Phaser.GameObjects.Sprite> {
    let result: ReadonlyArray<Phaser.GameObjects.Sprite> = [];

    for (let i = 0; i < count; i += 1) {
        const sprite = asType<Phaser.GameObjects.Sprite>(group.get());

        if (sprite !== null) {
            result = result.concat(sprite);
        } else {
            break;
        }
    }

    if (abortWhenLessThanCount) {
        if (result.length < count) {
            return [];
        }
    }

    return result;
}
