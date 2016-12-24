Array.prototype.reduce = function(process, initial) {
    const initVal = typeof this[0] === 'string' ? '' : 0;
    initial = initial || initVal; 
    for (let i=0;i<this.length;i++){
        initial = process(initial,this[i])
    }
    return initial;
}
