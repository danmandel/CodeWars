function every(arr, interval, start){
  if (interval == null && start == null) {return arr;}
  if (interval !== null) {
      var result = [];
      var i = (start == null ? 0 : start);
      for (i;i<arr.length;i+=interval){
          result.push(arr[i]);
      };
      return result;
  } 
}
