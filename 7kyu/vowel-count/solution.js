const getCount = str => str.match(/[aeiou]/g) ? str.match(/[aeiou]/g).length : 0;

//top rated
const getCount = str => (str.match(/[aeiou]/ig) || []).length
