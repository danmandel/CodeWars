 export const convert = (num:number):number => Math.sqrt(num) %1 === 0 ? Math.sqrt(num) : num*num;
 export const squareOrSquareRoot = (array:number[]): number[] => array.map(x => convert(x));
