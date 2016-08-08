function solution(roman){
    const valueArr = roman
        .split('') // ['X','X','I']
        .map(numeral => getValue(numeral)) // [10,10,1]
    
    var result = 0;
   
    for (var i=0;i<valueArr.length;i++){
        var current = valueArr[i];
        var next = valueArr[i+1];
        
        if (current < next){
            result += (next - current); 
            i += 1;
        } else {
            result += current;
        }
    }
    return result;
}

function getValue(numeral){
    if (numeral === 'I') return 1;
    if (numeral === 'V') return 5;
    if (numeral === 'X') return 10;
    if (numeral === 'L') return 50;
    if (numeral === 'C') return 100;
    if (numeral === 'D') return 500;
    if (numeral === 'M') return 1000;
}
