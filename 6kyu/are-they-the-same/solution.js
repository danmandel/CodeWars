const comp = (array1, array2) => {
	if (!Array.isArray(array1) || !Array.isArray(array2)) return false;

	const obj1 = array1.map(x => x * x).reduce((memo, current) => {
		if (!memo[current]) memo[current] = 1;
		else memo[current]++;
		return memo;
	}, {});

	const obj2 = array2.reduce((memo, current) => {
		if (!memo[current]) memo[current] = 1;
		else memo[current]++;
		return memo;
	}, {});
	
	return JSON.stringify(obj1) === JSON.stringify(obj2);
};

//top rated
function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}
