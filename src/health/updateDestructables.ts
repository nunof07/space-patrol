import { DestructableComponent } from '@src/health/DestructableComponent';

export function updateDestructables<T extends DestructableComponent>(
    components: ReadonlyArray<T>,
    time: number,
    delta: number
): ReadonlyArray<T> {
    let result: ReadonlyArray<T> = [];

    components.forEach(component => {
        component.update(time, delta);

        if (
            component.destructable.healthComponent.health().vitality.isAlive()
        ) {
            result = result.concat(component);
        }
    });

    return result;
}
