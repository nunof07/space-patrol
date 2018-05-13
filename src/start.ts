// tslint:disable-next-line:no-relative-imports no-import-side-effect
import './style.css';
// tslint:disable-next-line:ordered-imports
import { Message } from '@src/Message';
import { NotCovered } from '@src/NotCovered';

export function start(): void {
    const n = new NotCovered(10).add(5);
    const msg = new Message(`Hello World! ${n}`);
    msg.output();
}
