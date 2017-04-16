def string_clean(s):
    return ('').join([char for char in s if char not in [x for x in '1234567890']])

#top rated
def string_clean(s):
    return ''.join(x for x in s if not x.isdigit())
    
def string_clean(s):
    return s.translate(None,'0123456789')
    
string_clean = lambda s: __import__('re').sub(r'\d', '', s)
