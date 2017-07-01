const findUnique = numbers => {
    const int_map = {}
    for (let i=0;i<numbers.length;i++){
        if (int_map[numbers[i]]) int_map[numbers[i]]++
        else int_map[numbers[i]] = 1
    }
    for (const key in int_map){
        if (int_map[key] === 1) return Number(key)
    }
}
