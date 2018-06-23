import { MeteorSize } from '@src/enemies/meteor/MeteorSize';
import { meteorSpriteName } from '@src/enemies/meteor/meteorSpriteName';
import { MeteorType } from '@src/enemies/meteor/MeteorType';
import { expect } from 'chai';

describe('enemies/meteor', () => {
    describe('#meteorSpriteName', () => {
        it('should be a string', () => {
            expect(
                meteorSpriteName(MeteorType.Metal, MeteorSize.Medium, 1)
            ).to.be.a('string');
        });
    });
});
