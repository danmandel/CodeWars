function arraySum(arr) {
  var sum = 0;
  for (var i=0;i<arr.length;i++){
      if (typeof arr[i] == "number"){
          sum += arr[i];
      } else if (arr[i] instanceof Array){
          sum += arraySum(arr[i]);
      }
  };
  return sum;
}

// Best practices submission by MMMAAANNN
function arraySum(arr){
  var output = 0;
  for (var i in arr){
    var item = arr[i];
    if ( typeof(item)==="number"    ) { output += item;           }
    if ( item.constructor === Array ) { output += arraySum(item); }
  }
  return output;
}
