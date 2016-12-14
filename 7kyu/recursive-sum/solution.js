const sumR = (x) => {
    let sum = x.pop();
    return sum ? sum + sumR(x) : 0; 
}


//top rated
function sumR(x) {
  return x.length==0 ? 0 : x.shift() +sumR(x);
}
