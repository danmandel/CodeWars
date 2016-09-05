const moveZeros = (arr) => {
    const resultArr = [];
    let zeroCount = 0;   
    arr.forEach((x) => { x === 0 ? zeroCount++ : resultArr.push(x) });
    
    return resultArr.concat('0'.repeat(zeroCount).split('').map(Number));
}

//top rated

var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
