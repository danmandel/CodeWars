export const evenNumbers = (array, number) => {
	const result = [];
	for (let i = array.length - 1; i >= 0; i--) {
		if (array[i] % 2 === 0) {
			result.push(array[i]);
		}
		if (result.length === number) return result.reverse();
	}
};
