const mean = lst => {
    const str = lst.join('').match(/[A-Za-z+]/g).join('');
    const mean = lst.join('').match(/\d/g).reduce((p,c) => +p + +c, 0) / 10;
    return [mean, str];
}
