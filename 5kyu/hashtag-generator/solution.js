function generateHashtag (str) {
    str = str.trim();
    if (str === '') return false;
    var result = '#';
    const wordArr = str.split(' ').map(s => capitalizeFirstLetter(s));
    result += wordArr.join('');
    
    return result.length < 140 ? result : false;
}

function capitalizeFirstLetter(word){
    return word[0].toUpperCase() + word.slice(1);
}

//top rated
function generateHashtag (str) {
  return str.length > 140 || str === '' ? false :
    '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
