def count_sheep(n):
    return ''.join("{} sheep...".format(x) for x in range(1,n+1))
