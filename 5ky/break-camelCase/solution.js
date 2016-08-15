function solution(string) {
    let result = '';
    string
    .split('')
    .forEach(char => {
        if (isCapital(char)) result += ' ' + char;
        else result += char;
    })
    return result;
}

function isCapital(char){
    return char === char.toUpperCase();
}


//top rated
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}
