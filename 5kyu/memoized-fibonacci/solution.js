var fibonacci = function(n) {
    var memo = {};
    
    function f(num){
        if (memo[num]) return memo[num];
        else {
            if (num < 2) {
                memo[num] = num
                return memo[num]
            } else {
                memo[num] = f(num-1) + f(num-2)
                return memo[num]
            }
        }
    };
    return f(n);
}
