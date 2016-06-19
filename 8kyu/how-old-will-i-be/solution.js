function calculateAge(birthday,year) {
    var dif = year-birthday; // 2016-1994
    if (dif > 0){
        if (dif===1){return `You are ${dif} year old.`};
        return (`You are ${dif} years old.`)
    } else if (dif < 0){
        if (dif===-1){return `You will be born in ${-dif} year.`}
        return (`You will be born in ${-dif} years.`)
    } else if (dif===0){return "You were born this very year!"}
  
}
