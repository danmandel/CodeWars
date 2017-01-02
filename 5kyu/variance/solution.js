const variance = numbers => {
    const mean = numbers.reduce((p,c) => p+c, 0) / numbers.length;
    return numbers.reduce((total,c) => total+(c-mean)*(c-mean), 0) / numbers.length;
};
