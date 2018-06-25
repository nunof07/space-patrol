import { MeteorSize } from '@src/enemies/meteor/MeteorSize';
import { MeteorType } from '@src/enemies/meteor/MeteorType';

export function meteorHitpoints(
    size: MeteorSize,
    _composition: MeteorType
): number {
    switch (size) {
        case MeteorSize.Large:
            return 200;
        case MeteorSize.Medium:
            return 125;
        case MeteorSize.Small:
        default:
            return 75;
    }
}
