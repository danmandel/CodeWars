function toCamelCase(str){
    return /-/.test(str) 
        ? str
            .split('-')
            .map(capitalize)
            .join('')
        : str
            .split('_')
            .map(capitalize)
            .join('')
}

function capitalize(word,index){
    return index !== 0 
        ? word[0].toUpperCase() + word.substring(1)
        : word
}

//top rated
function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}
