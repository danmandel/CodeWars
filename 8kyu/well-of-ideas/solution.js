export const well = x => {
    const numGoodIdeas = x.filter(x => x === 'good').length;
    const resultMap = {
        0: 'Fail!',
        1: 'Publish!',
        2: 'Publish!'
    };

    return numGoodIdeas < 3
        ? resultMap[numGoodIdeas]
        : 'I smell a series!'
};


// Good solution
function well2(x) {
    const count = x.reduce((s, v) => s + (v == 'good'), 0);
    return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
  }