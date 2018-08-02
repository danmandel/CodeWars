import {well} from './solution';

describe('Test Suite - well',() => {
    it('should return the correct output', () => {
        const input = ['bad', 'bad', 'bad'];
        const output = well(input);
        const solution = 'Fail!';
        expect(output).toEqual(solution);
    });

    it('should return the correct output', () => {
        const input = ['good', 'bad', 'bad', 'bad', 'bad'];
        const output = well(input);
        const solution = 'Publish!';
        expect(output).toEqual(solution);
    })

    

    it('should return the correct output', () => {
        const input = ['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'];
        const output = well(input);
        const solution = 'I smell a series!';
        expect(output).toEqual(solution);
    })

} )