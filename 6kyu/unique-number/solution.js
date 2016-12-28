const findUniq = arr => arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x))[0];

//alternate solution
function findUniq(arr) {
    const memo = {};
    arr.forEach((x,i) => {
        if (!memo[x]) memo[x] = 1;
        else memo[x] += 1;
    });
    
    for (let prop in memo){
        if (memo[prop] == 1) return +prop;
    };
};
