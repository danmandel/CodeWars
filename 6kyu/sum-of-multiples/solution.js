const solution = number => {
    const multiples = [];
    for (let i=0;i<number;i++){
        if (i % 3 === 0) multiples.push(i);
        if (i % 5 === 0) multiples.push(i);
    };
    const uniqueMultiples = [...new Set(multiples)];
    return uniqueMultiples.reduce((p,c) => p+c,0);
};
