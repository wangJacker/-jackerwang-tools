import { accAdd, accDiv, accSub, accMul } from '../src';

describe('blah', () => {
    it('works', () => {
        expect(accAdd(1, 1)).toEqual(2);
    });
});

describe('blah', () => {
    it('works', () => {
        expect(accDiv(10, 2)).toEqual(5);
    });
});


describe('blah', () => {
    it('works', () => {
        expect(accSub(10, 2)).toEqual(8);
    });
});

describe('blah', () => {
    it('works', () => {
        expect(accMul(10, 2)).toEqual(20);
    });
});