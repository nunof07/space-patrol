import { ScalarOf } from '@src/core/ScalarOf';
import { expect } from 'chai';

describe('core/ScalarOf', () => {
    describe('#value', () => {
        it('should return input', () => {
            expect(new ScalarOf(10).value).to.equal(10);
        });
    });
});
