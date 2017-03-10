def square_digits(num):
    num = [i for i in str(num)]
    result = reduce( 
        lambda previous, current:
        previous + str(int(current) * int(current)),
        num,
        ''
    )
    return int(result)

#top rated
def square_digits(num):
    ret = ""
    for x in str(num):
        ret += str(int(x)**2)
    return int(ret)
