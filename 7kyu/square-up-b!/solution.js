
export const squareUp = n => {
    let i;
    let result = [];
    for (i=0;i<n;i++){
        let numLeadingZeros = n-1;
        let zeroArr = getZeroArr(numLeadingZeros)
    }
    const inverseArr = getInverseArr(n);
    return result; // Do your magic!
}; 

export const getZeroArr = n => [...new Array(n)].map(_ => 0);
export const getInverseArr = n => [...new Array(n)].map((_,i,a) => a.length-i);