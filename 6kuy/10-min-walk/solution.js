function isValidWalk(walk) {
  var verticalLoc = 0;
  var horizontalLoc = 0;
  
  if (walk.length===10){
      for (var i=0;i<walk.length;i++){
          if (walk[i] === 'n') {verticalLoc += 1};
          if (walk[i] === 's') {verticalLoc -= 1};
          if (walk[i] === 'w') {horizontalLoc -= 1};
          if (walk[i] === 'e') {horizontalLoc += 1};
      }
     
      if ((verticalLoc == 0) && (horizontalLoc == 0)) {return true;}
  
  } else {return false;}

  }
