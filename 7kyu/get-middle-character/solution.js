function getMiddle(s) {
  if (s.length %2 === 0){
      var leftMiddleIndex = s.length/2 - 1;
      var rightMiddleIndex = s.length/2;
      return s.substring(leftMiddleIndex,rightMiddleIndex+1);
  } else {
      var middleIndex = Math.floor(s.length/2)
      return s[middleIndex];
  }
};
