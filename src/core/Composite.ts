import { System } from '@src/core/System';

export class Composite implements System {
    private readonly systems: ReadonlyArray<System>;

    constructor(systems: ReadonlyArray<System>) {
        this.systems = systems;
    }

    public create(): void {
        this.systems.forEach(system => {
            system.create();
        });
    }

    public update(): void {
        this.systems.forEach(system => {
            system.update();
        });
    }
}
