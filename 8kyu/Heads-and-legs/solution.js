function animals(heads, legs){

  var numAnimals = []; // chickens, cows
  
  // create array of all possible answers
  for (i=0;i<heads+1;i++){
      numAnimals.push([i, heads-i]); //[[0,72],[1,71],[2,70]...[72,0]] 
  };
  
  // 
  for (i=0;i<heads+1;i++){
      chickens = numAnimals[i][0];
      cows = numAnimals[i][1];
      
      if (chickens*2+cows*4==legs){
          return [chickens,cows];
      }
     
  };
  
  // Edge cases
  if (legs > heads*4){
      return "No solutions";
  };
  if (heads == 0){
          return [0,0];
  };
  
  return "No solutions";
 
}
