import {predictAge} from './solution';

describe('Test Suite - predictAge', () => {
    it('Should return the correct output', () => {
        const input = [65,60,75,55,60,63,64,45];
        const output = predictAge(...input);
        const solution = 86;

        expect(output).toEqual(solution);
    })
})