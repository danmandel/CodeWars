function squaresOnly(array) {
    return array.filter(x => (Math.sqrt(x) %1 == 0));
}

// Best practices submission by CrazyMerlyn
function squaresOnly(a) {
  return a.filter(x => x ** 0.5 % 1 == 0);
}
