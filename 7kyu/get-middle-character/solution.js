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

// Best practices
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
