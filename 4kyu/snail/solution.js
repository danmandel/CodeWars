snail = function(array) {
    const snailArr = [];
    const n = array.length;
    var element;
    var direction = 'right';
    var row;
    const popElement = function(row){
        element = array[row].pop();
        if (element) snailArr.push(element);
    };
    const popRow = function(row){
        for (var j = 0;j<n;j++){
            element = array[row].pop();
            if (element) snailArr.push(element);
        }
    };
    const shiftElement = function(row){
        element = array[row].shift();
        if (element) snailArr.push(element);
    };
    const shiftRow = function(row){
        for (var j = 0;j<n;j++){
            element = array[row].shift();
            if (element) snailArr.push(element);
        }
    };
    const rowIsNotEmpty = function(row){
        if (array[row]) return Boolean(array[row].length)
        return false;
    };

    
    if (array[0].length === 0) return [];

    row = 0;
    while (snailArr.length < n*n){
        if (direction === 'right'){
            shiftRow(row);
            direction = 'down';
            row++;
        }

        if (direction === 'down'){
            while (rowIsNotEmpty(row)){
                popElement(row);
                row++;
            }
            direction = 'left';
            row--;
        }

        if (direction === 'left'){
            popRow(row);
            direction = 'up';
            row--;
        }

        if (direction === 'up'){
            while (rowIsNotEmpty(row)){
                shiftElement(row)
                row--;
            }
            direction = 'right';
            row++;
        }
    }
    return snailArr;
};



// top rated
snail = function(array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}
