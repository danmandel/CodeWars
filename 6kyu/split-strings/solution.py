import re
def solution(s):
    regex = re.compile(r'\w{2}') 
    matches = re.findall(regex, s)
    result = [x for x in matches]
    if len(s) % 2 != 0:
        result.append(s[-1:]+'_')
    return result


def solution(s):
    return [s[x:x+2] if x < len(s) - 1 else s[-1] + "_" for x in range(0, len(s), 2)]
