import { MeteorSize } from '@src/enemies/meteor/MeteorSize';
import { MeteorType } from '@src/enemies/meteor/MeteorType';

export function meteorHitpoints(
    size: MeteorSize,
    _composition: MeteorType
): number {
    switch (size) {
        case MeteorSize.Large:
            return 150;
        case MeteorSize.Medium:
            return 75;
        case MeteorSize.Small:
        default:
            return 50;
    }
}
