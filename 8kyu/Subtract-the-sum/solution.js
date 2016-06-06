function SubtractSum(n){
  // 1. sum all the digits of n
  stringArr = n.toString().split("");
  digitArr = stringArr.map(x => Number(x));
  digitArrSum = digitArr.reduce((a,b) => a+b);
  
  // 2. subtract the sum from n
  newNumber = n - digitArrSum;
  
  // 3. if newNumber is in the list, return the associated fruit. else, go back to 1. 
  
 
  return ;// fruit name like "apple"
}
