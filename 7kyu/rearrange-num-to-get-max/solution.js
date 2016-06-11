var maxRedigit = function(num) {
  
  if ( (num>99) && (num<1000) ) {
      maxNum = Number(num.toString().split("").sort().reverse().join(""));
      return maxNum;
  } else {
      return null;
  }
};
