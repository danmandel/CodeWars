function highAndLow(numbers){
  var digits = numbers.match(/-?[0-9]+/g); // ["4","5","-31"]
  digits = digits.map(x => Number(x));
  var highest = Math.max.apply(null,digits);
  var lowest = Math.min.apply(null,digits);
  
  return `${highest} ${lowest}`;
}

//top rated
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number); // .map(Number) technically not necesary for Math.max and Math.min
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}
