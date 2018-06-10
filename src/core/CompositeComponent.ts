import { Component } from '@src/core/Component';

export class CompositeComponent implements Component {
    private readonly components: ReadonlyArray<Component>;

    constructor(components: ReadonlyArray<Component>) {
        this.components = components;
    }

    public update(time: number, delta: number): void {
        this.components.forEach(components => {
            components.update(time, delta);
        });
    }
}
