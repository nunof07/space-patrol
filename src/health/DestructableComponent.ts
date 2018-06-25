import { Component } from '@src/core/Component';
import { Destructable } from '@src/health/Destructable';

export interface DestructableComponent extends Component {
    readonly destructable: Destructable;
}
