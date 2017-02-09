const descSort = word => word.length > 1 
    ? word[0] + word.split('')
        .slice(1,word.length-1)
        .sort()
        .reverse()
        .join('') + word[word.length-1] 
    : word;
    
const sortTheInnerContent = words => words
    .split(' ')
    .map(word => descSort(word))
    .join(' ');
