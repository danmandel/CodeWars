function showMe(yourID){
  if (yourID[0] === "-" || yourID[yourID.length-1]==="-"){return false;};
  if (yourID[0] !== yourID[0].toUpperCase()){return false;};
  
  for (var i=0;i<yourID.length;i++){
      if (yourID[i] === "-"){return true;};
      if (yourID[i] === " "){return false;};
      if (typeof(yourID[i]) !== "string"){return false};
  }
  return true;
}


// best practices solution by lizq
function showMe(yourID){
  return /^[A-Z][a-z]*(-[A-Z][a-z]*)*$/.test(yourID);
}
