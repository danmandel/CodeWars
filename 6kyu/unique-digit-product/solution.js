const getProd = num => String(num).split('').map(Number).reduce((p,c) => p*c,1);
const uniqueDigitProducts = a => [...new Set(a.map(num => getProd(num)))].length;
