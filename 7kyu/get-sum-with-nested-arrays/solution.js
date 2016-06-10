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
