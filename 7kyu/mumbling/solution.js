function accum(s) {
    var result = '';
    var resultArr = [];
    var charArr = s.split('');
    charArr.map(function(letter,i){
        resultArr.push(letter.repeat(i+1));
    });
    resultArr = resultArr.map(function(word){
       return word[0].toUpperCase()+word.slice(1,word.length).toLowerCase();
    });
    result = resultArr.join('-');
    return result;
}
