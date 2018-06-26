import { Component } from '@src/core/Component';
import { Destructable } from '@src/health/Destructable';

export interface Wave extends Component {
    onComplete(callback: () => void): void;
    onDeath(callback: (destructable: Destructable) => void): void;
    destroy(): void;
}
