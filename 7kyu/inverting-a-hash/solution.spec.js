import {invertHash} from './solution';

describe('Test Suite1',()=>{
    it('should return correct output',()=>{
        const input = { a: '1', b: '2', c: '3' };
        const output = { 1: 'a', 2: 'b', 3: 'c' };
    
        const result = invertHash(input);
        expect(result).toEqual(output);
    });

    it('should return correct output',()=>{
        const input = { hello: 'world' };
        const output =  { world: 'hello' };
    
        const result = invertHash(input);
        expect(result).toEqual(output);
    });
});
