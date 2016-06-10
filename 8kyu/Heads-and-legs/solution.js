function animals(heads, legs){
  
  var numAnimals = [];
  
  //[[0,72],...,[72,0]]
  for (i=0;i<heads+1;i++){ 
      if (i*2+(heads-i)*4==legs){
        numAnimals.push([i, heads-i]); // [chickens, cows]    
      }
  };
  
  if (numAnimals.length > 0){
      return numAnimals[0];
  } else {
      return "No solutions";
  }
}
