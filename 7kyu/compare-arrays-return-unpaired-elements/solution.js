function hotSingles(arr1, arr2) {

//returns array of numbers that have not appeared in both arrs
inArr1NotArr2 = arr1.filter( x => arr2.indexOf(x) == -1);
inArr2NotArr1 = arr2.filter( x => arr1.indexOf(x) == -1);

//returns array of numbers that have not appeared more than once in each arr


result = inArr2NotArr1.concat(inArr1NotArr2);

return result;
}
