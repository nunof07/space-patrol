import { Component } from '@src/core/Component';
import { compositeUpdate } from '@src/core/compositeUpdate';

export class CompositeComponent implements Component {
    private readonly components: ReadonlyArray<Component>;

    constructor(components: ReadonlyArray<Component>) {
        this.components = components;
    }

    public update(time: number, delta: number): void {
        compositeUpdate(this.components, time, delta);
    }
}
