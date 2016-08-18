function duplicateEncode(word){
  const charArr =  word
      .toLowerCase()
      .split("");  
  const resultArr = [];
  
  charArr.forEach(char => {
      if (appearsOnce(char,charArr)) resultArr.push("(");
      else resultArr.push(")");
  });
  
  return resultArr.join("");
}

function appearsOnce(character, array){
    return array.lastIndexOf(character) === array.indexOf(character)
}

// top rated
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
