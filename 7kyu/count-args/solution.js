function anArgument() {
    function addQuotes(x){return '"'+x+'"';};
    var argsString = ""; // Doesn't include last 2 args.
    for (var i=0;i<arguments.length-2;i++){
        argsString = argsString.concat(addQuotes(arguments[i])+", ")
    };
    
    if (arguments.length === 0){return "You didn't give me any arguments.";};
    if (arguments.length === 1){return "You gave me 1 argument and it is "+addQuotes(arguments[0])+".";};
    if (arguments.length > 1){return "You gave me "+ arguments.length + " arguments and they are "
    + argsString+addQuotes(arguments[arguments.length-2]) 
    +" and "+addQuotes(arguments[arguments.length-1])+".";
    }
}
