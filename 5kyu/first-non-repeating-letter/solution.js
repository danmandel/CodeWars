function firstNonRepeatingLetter(s) {
    const uniqueArr = s
        .split('')
        .filter(x => {
            return isNonRepeating(s.toLowerCase(), x.toLowerCase());
        });
    
    return uniqueArr.length > 0 ? uniqueArr[0] : "";
}

function isNonRepeating(string, char){
    return string.indexOf(char) === string.lastIndexOf(char)
}


//top rated
function firstNonRepeatingLetter(s) {
  for(var i in s) {
    if(s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}
