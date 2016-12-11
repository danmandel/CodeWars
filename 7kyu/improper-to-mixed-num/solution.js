function getMixedNum(fraction) {
    const [numerator,denominator] = fraction.split('/').map(Number);
    const wholeNum = Math.floor(numerator/denominator);
    const modNum = numerator % denominator;
    return `${wholeNum} ${modNum}/${denominator}`;
}
