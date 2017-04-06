import re
def parse_float(string):
    try:
        result = re.search(r'[\d.]+',string)
        return float(result.group(0))
    except Exception as e:
        return None
        
#top rated
def parse_float(string):
    try:
        return float(string)
    except:
        return None
