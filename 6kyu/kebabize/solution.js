function kebabize(str) {
    let newStr = '';
    str = str.match(/[a-zA-z]/g).join('');
    for (let i=0;i<str.length;i++){
        let char = str[i];
        if (char === char.toUpperCase()){
            newStr = newStr.concat('-'+char.toLowerCase());
        } else {
           newStr = newStr.concat(char);
        }
    }
    return newStr[0] === '-' ? newStr.substring(1) : newStr
}


//top rated
function kebabize(str) {
  var nonumber = str.replace(/\d/g, '').split(/(?=[A-Z])/g);
  return nonumber.join('-').toLowerCase();
}
