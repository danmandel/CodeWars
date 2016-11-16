function persistence(num) {
   let count = 0;   
   while (String(num).length > 1) {
       count++;
       num = multDigits(num);
   }
   return count;
}

function multDigits(num){
    return num
        .toString()
        .split('')
        .map(x => Number(x))
        .reduce((p,c) => p*c)
}


//top rated
const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
}
