export const predictAge = (age1,age2,age3,age4,age5,age6,age7,age8) => {
    return Math.floor((([age1,age2,age3,age4,age5,age6,age7,age8]
        .map(x => x*x)
        .reduce((p,c) => p+c))**.5)/2)
};

//nice user-submitted solution
const predictAge2 = (...age) => Math.floor(Math.sqrt([...age].map(e => e * e).reduce((r, e) => r + e, 0)) / 2);
