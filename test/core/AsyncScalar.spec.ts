import { AsyncScalar } from '@src/core/AsyncScalar';
import { expect } from 'chai';

describe('core/AsyncScalar', () => {
    describe('#value', () => {
        it('should return function result', () => {
            expect(new AsyncScalar(() => 10).value).to.equal(10);
        });
    });
});
