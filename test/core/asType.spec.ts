import { asType } from '@src/core/asType';
import { expect } from 'chai';

describe('core', () => {
    describe('#asType', () => {
        it('should return type', () => {
            class Test {
                public hello(name: string): string {
                    return `Hello ${name}`;
                }
            }
            const obj = {
                hello: (name: string): string => `Hello ${name}`,
            };
            expect(asType<Test>(obj).hello('World')).to.equal('Hello World');
        });
    });
});
