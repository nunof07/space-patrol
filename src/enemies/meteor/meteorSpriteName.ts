import { MeteorSize } from '@src/enemies/meteor/MeteorSize';
import { MeteorType } from '@src/enemies/meteor/MeteorType';

export function meteorSpriteName(
    composition: MeteorType,
    size: MeteorSize,
    index: number
): string {
    const compositionStr = composition === MeteorType.Metal ? 'grey' : 'brown';
    const sizeStr =
        size === MeteorSize.Large
            ? 'big'
            : size === MeteorSize.Medium
                ? 'med'
                : 'small';

    return `neutrals/meteor-${compositionStr}-${sizeStr}-0${index}.png`;
}
