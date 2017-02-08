export function shuffledArray(shuffled: number[]): number[] {
    let result: number[] = [];
    shuffled.forEach((num, index) => {
        let sum: number = shuffled.filter((x, i) => i !== index).reduce((p,c) => p+c,0);
        if (sum === num) result = shuffled.filter((x,i) => i !== index).sort((a,b) => a-b);
    });
    return result;
};
