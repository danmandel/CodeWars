import {toNumberArray} from './solution';

describe('Test Suite - toNumberArray', () => {
    it('should return the correct output', () => {
        const input = ["1.1","2.2","3.3"];
        const output = toNumberArray(input);
        const solution = [1.1,2.2,3.3];

        expect(output).toEqual(solution);
    })
})