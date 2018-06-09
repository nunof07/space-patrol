import { Composite } from '@src/core/Composite';
import { expect } from 'chai';
import { times } from 'ramda';
import * as sinon from 'sinon';

type SystemSpy = {
    create: sinon.SinonSpy;
    update: sinon.SinonSpy;
};

function createSystems(length: number): ReadonlyArray<SystemSpy> {
    return times(() => {
        return {
            create: sinon.spy(),
            update: sinon.spy(),
        };
    }, length);
}

describe('core/Composite', () => {
    let composite: Composite;
    let systems: ReadonlyArray<SystemSpy>;

    beforeEach(() => {
        systems = createSystems(5);
        composite = new Composite(systems);
    });
    describe('#create', () => {
        it('should run each systems create once', () => {
            composite.create();
            expect(
                systems.filter(system => system.create.calledOnce).length
            ).to.equal(systems.length);
        });
    });
    describe('#update', () => {
        it('should run each systems update once', () => {
            composite.update(100, 8);
            expect(
                systems.filter(system => system.update.calledOnce).length
            ).to.equal(systems.length);
        });
    });
});
