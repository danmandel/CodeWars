function scoreMatrix(matrix) { //fails on second two tests
    var arr = [];
    var score = 0;
    
    //create matrix
    for (var i=0;i<matrix.length;i++){
       arr = arr.concat(matrix[i])
    }
    
    function process(x,i){
        if (i % 2 == 1){score -= x}
        if (i % 2 ==0){score += x}
        else return;
      }
     
     arr.map((x,i) => process(x,i))
   
    return score;
}
