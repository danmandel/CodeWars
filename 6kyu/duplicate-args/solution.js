function solution(){
    const memo = {};
    const args = Array.prototype.slice.call(arguments);
    for (let i = 0;i<args.length;i++){
        let arg = args[i];
        if (!memo[arg]) memo[arg] = true;
        else return true;
    }
    return false;
}

//one line solution
function solution(){
    return [...arguments].length !== [...new Set([...arguments])].length;
}

//top rated solution
function solution(){return new Set(arguments).size!=arguments.length;}
