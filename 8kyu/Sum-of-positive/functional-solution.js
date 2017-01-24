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

//updated solution
const positiveSum = arr => arr.reduce((p,c) => c > 0 ? p+c : p, 0);
