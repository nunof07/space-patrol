import './style.css';
import { Message } from '@src/Message';

export function start(): void {
    const msg = new Message('Hello World!');
    msg.output();
}