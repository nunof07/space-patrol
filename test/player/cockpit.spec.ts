import { cockpit } from '@src/player/cockpit';
import { mockChildren } from '@test/sprites/mockChildren';
import { mockGroup } from '@test/sprites/mockGroup';
import { expect } from 'chai';

describe('player', () => {
    describe('#cockpit', () => {
        it('should not be null', () => {
            expect(cockpit(mockGroup(mockChildren()))).to.not.equal(
                null,
                'Expected non-null value'
            );
        });
    });
});
