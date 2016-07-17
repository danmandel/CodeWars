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
