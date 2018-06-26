import { Component } from '@src/core/Component';

export interface Wave extends Component {
    onComplete(callback: () => void): void;
    destroy(): void;
}
