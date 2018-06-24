import { MeteorSize } from '@src/enemies/meteor/MeteorSize';

export function meteorDamage(size: MeteorSize): number {
    switch (size) {
        case MeteorSize.Large:
            return 125;
        case MeteorSize.Medium:
            return 75;
        case MeteorSize.Small:
        default:
            return 50;
    }
}
