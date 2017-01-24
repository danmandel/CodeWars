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
const countPositivesSumNegatives = input => input && input.length
    ? input.reduce((arr, current) => {
        current > 0 ? arr[0]++ : arr[1] += current
        return arr;
        }, [0, 0])
    : [];
