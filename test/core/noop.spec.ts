import { noop } from '@src/core/noop';
import { expect } from 'chai';

describe('core', () => {
    describe('#noop', () => {
        it('should not throw', () => {
            expect(() => {
                noop();
            }).to.not.throw();
        });
    });
});
