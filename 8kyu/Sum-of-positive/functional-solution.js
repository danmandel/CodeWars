function positiveSum(arr) {

    function isPositive(x){
        return x > 0;
    };
    
    var positiveArr = arr.filter(isPositive);
    
    var manipulate = function(a,b){
        return a+b;
    };
    
    var result = positiveArr.reduce(manipulate,0);
    
    return result;
    
}
