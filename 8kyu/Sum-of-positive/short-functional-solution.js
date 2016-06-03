function positiveSum(arr) {

    var positiveArr = arr.filter(x => (x > 0));
     
    var result = positiveArr.reduce((a,b) => (a+b), 0);
    
    return result;
    
}
