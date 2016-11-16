String.prototype.toJadenCase = function () {
  return this
      .split(' ')
      .map(word => capitalize(word))
      .join(' ')
};

function capitalize(word) {
    return word[0].toUpperCase()+ word.slice(1)
}
