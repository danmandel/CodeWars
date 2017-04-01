def find_it(seq):
    int_map = {}
    for x in seq:
        if x in int_map:
            int_map[x] += 1
        else:
            int_map[x] = 1
    for x in int_map:
        if int_map[x] %2 !=0:
            return x
    
#top rated
def find_it(seq):
    for i in seq:
        if seq.count(i)%2!=0:
            return i
