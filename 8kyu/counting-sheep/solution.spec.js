import { countSheep } from './solution';

it('Should return the correct answer for 1 sheep', () => {
	const result = countSheep(1);
	const solution = '1 sheep...';
	expect(result).toEqual(solution);
});

it('Should return the correct answer for 2 sheep', () => {
	const result = countSheep(2);
	const solution = '1 sheep...2 sheep...';
	expect(result).toEqual(solution);
});
