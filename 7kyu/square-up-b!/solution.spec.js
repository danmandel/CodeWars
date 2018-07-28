import {squareUp} from './solution';
import {getZeroArr} from './solution';

describe('Test Suite - squareUp', () => {
    it('Should return the correct answer for input: 1', () => {
        const input = 1;
        const output = squareUp(input);
        const solution = [1];
        expect(output).toEqual(solution);
    });

    it('Should return the correct answer for input: 2', () => {
        const input = 2;
        const output = squareUp(input);
        const solution = [0, 1, 2, 1];
        expect(output).toEqual(solution);
    });

    it('Should return the correct answer for input: 4', () => {
        const input = 4;
        const output = squareUp(input);
        const solution = [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1];
        expect(output).toEqual(solution);
    });

    it('Should return the correct answer for input: 9', () => {
        const input = 9;
        const output = squareUp(input);
        const solution = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 2, 1, 0, 0, 0, 0, 0, 4, 3, 2, 1, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 0, 0, 6, 5, 4, 3, 2, 1, 0, 0, 7, 6, 5, 4, 3, 2, 1, 0, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        expect(output).toEqual(solution);
    });

});

describe('Test Suite - getZeroArr', () => {
    it('Should return correct array for input: 0', () => {
        const input = 0;
        const output = getZeroArr(input);
        const solution = [];
        expect(output).toEqual(solution);
    });

    it('Should return correct array for input: 2', () => {
        const input = 2;
        const output = getZeroArr(input);
        const solution = [0,0];
        expect(output).toEqual(solution);
    });
});