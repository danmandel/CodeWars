import re
def solution(s):
    regex = re.compile(r'\w{2}') 
    matches = re.findall(regex, s)
    if len(s) % 2 == 0:
        return [x for x in matches] 
    else:
        arr = [x for x in matches]
        arr.append(s[-1:]+'_')
        return arr 


#top rated
