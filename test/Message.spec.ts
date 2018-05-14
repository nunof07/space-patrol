import { Message } from '@src/Message';
import { expect } from 'chai';

describe('Message#output', () => {
    it('should not throw', () => {
        expect(() => {
            new Message('Hello').output();
        }).to.not.throw();
    });
});
