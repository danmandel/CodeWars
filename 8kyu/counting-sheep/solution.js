export const countSheep = num =>
	[
		...new Array(num)
	].reduce((p, c, i) => `${p}${i + 1} sheep...`, '');
