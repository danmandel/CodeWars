export const invertHash = (hash) => Object.keys(hash).reduce((memo,key,i,a) => {
    memo[hash[key]] = key;
    return memo;
},{});


// Clever solution:
const invertHash2 = hash => 
  Object.entries(hash).reduce((h, [k, v]) => ({ ...h, [v]: k }), {})
