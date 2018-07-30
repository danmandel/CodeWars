import {stringToArray} from './solution';

describe('Test Suite - stringToArray',() => {
    it('should return the correct output for input: "Robin Singh" ', () => {
        const input = "Robin Singh";
        const output = stringToArray(input);
        const solution = ["Robin", "Singh"];
        expect(output).toEqual(solution);
    });
});