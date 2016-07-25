  function countPositivesSumNegatives(input) {
      var positiveCount = 0;
      var negativeSum = 0;
      var resultArr = [];
      
      if (input === null || input.length === 0){
          return [];
      };
      
      input.forEach(function(num){
          num > 0 ? positiveCount++ : num < 0 ? negativeSum += num : negativeSum+=0;
      });
      
      resultArr = [positiveCount, negativeSum];
      
      return resultArr;
  }
