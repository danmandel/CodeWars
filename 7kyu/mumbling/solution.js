function accum(s) {
    var result = '';
    var resultArr = [];
    var charArr = s.split('');
    var arr = charArr.map(function(letter,i){
        resultArr.push(letter.repeat(i+1));
    });
    var arr = resultArr.map(function(word){
       word[0] = word[0].toUpperCase();// + word.slice(1,word.length);
    });
    result = resultArr.join('-');
    
    return result;
}
