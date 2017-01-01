Array.prototype.except = function(keys){
    return this.filter((x,i) => keys instanceof Array
        ? !keys.includes(i) 
        : i !== keys)
};
