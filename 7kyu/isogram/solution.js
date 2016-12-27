const isIsogram = str => str.length === [...new Set(str.toLowerCase())].length;


//top rated
function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}

//other top rated
function isIsogram(str){
  var i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}
