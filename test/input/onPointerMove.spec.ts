import { Position } from '@src/core/Position';
import { onPointerMove } from '@src/input/onPointerMove';
import { expect } from 'chai';
import * as Phaser from 'phaser';
import * as sinon from 'sinon';

function shouldExecuteCallback(
    input: Phaser.Events.EventEmitter,
    spy: sinon.SinonSpy,
    expectedPosition: Position
): void {
    onPointerMove(<Phaser.Input.InputPlugin>input, spy);
    input.emit('pointermove', expectedPosition);
    expect(spy.calledOnceWith(expectedPosition)).to.equal(
        true,
        'Expected callback executed with position'
    );
}

function shouldNotExecuteCallback(
    input: Phaser.Events.EventEmitter,
    spy: sinon.SinonSpy,
    expectedPosition: Position
): void {
    onPointerMove(<Phaser.Input.InputPlugin>input, spy, () => false);
    input.emit('pointermove', expectedPosition);
    expect(spy.notCalled).to.equal(true, 'Expected callback to not be called');
}

function shouldExecuteCallbackOnce(
    input: Phaser.Events.EventEmitter,
    spy: sinon.SinonSpy,
    expectedPosition: Position
): void {
    onPointerMove(
        <Phaser.Input.InputPlugin>input,
        spy,
        position => position.x === 200 && position.y === 200
    );
    input.emit('pointermove', expectedPosition);
    input.emit('pointermove', { x: 100, y: 100 });
    expect(spy.calledOnceWith(expectedPosition)).to.equal(
        true,
        'Expected callback executed once with expected position'
    );
}

describe('input', () => {
    describe('#onPointerMove', () => {
        let input: Phaser.Events.EventEmitter;
        let expectedPosition: Position;
        let spy: sinon.SinonSpy;

        beforeEach(() => {
            expectedPosition = { x: 200, y: 200 };
            input = new Phaser.Events.EventEmitter();
            spy = sinon.spy();
        });
        it('should execute callback', () => {
            shouldExecuteCallback(input, spy, expectedPosition);
        });
        it('should not execute callback', () => {
            shouldNotExecuteCallback(input, spy, expectedPosition);
        });
        it('should execute callback once', () => {
            shouldExecuteCallbackOnce(input, spy, expectedPosition);
        });
    });
});
