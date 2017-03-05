def distinct(seq):
    temp = []
    for i in seq:
        if i not in temp:
            temp.append(i)
    return temp
    
//top rated

def distinct(seq):
    return sorted(set(seq), key = seq.index)
