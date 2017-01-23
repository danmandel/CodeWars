var min = function(list){

    var result = list.reduce(function(a,b){
        if (a < b){return a}
        else {return b}
    });
    return result;
}

var max = function(list){
    var result = list.reduce(function(a,b){
        if (a < b){return b}
        else {return a}
    });
    return result;
}

const min = list => list.reduce((p,c) => p < c ? p : c, list[0]);
const max = list => list.reduce((p,c) => p > c ? p : c, list[0]);

//top rated
const min = list => Math.min(...list);
const max = list => Math.max(...list);
