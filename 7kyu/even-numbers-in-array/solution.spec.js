import { evenNumbers } from './solution';


it('should return the correct answer', () => {
    expect(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([4, 6, 8])
})