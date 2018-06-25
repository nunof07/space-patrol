import { DestructableComponent } from '@src/health/DestructableComponent';

export function destroyDestructables<T extends DestructableComponent>(
    components: ReadonlyArray<T>
): void {
    components.forEach(component => {
        component.destroy();
    });
}
