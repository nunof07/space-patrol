// tslint:disable-next-line:no-relative-imports no-import-side-effect
import './style.css';
// tslint:disable-next-line:ordered-imports
import { Message } from '@src/Message';

export function start(): void {
    const msg = new Message('Hello World!');
    msg.output();
}
