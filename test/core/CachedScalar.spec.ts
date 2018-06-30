import { AsyncScalar } from '@src/core/AsyncScalar';
import { CachedScalar } from '@src/core/CachedScalar';
import { expect } from 'chai';

describe('core/CachedScalar', () => {
    describe('#value', () => {
        it('should only calculate result once', () => {
            let x = 1;
            const cached = new CachedScalar(
                new AsyncScalar(() => {
                    x += 1;

                    return x;
                })
            );
            expect(cached.value).to.equal(2);
            expect(cached.value).to.equal(2);
        });
    });
});
