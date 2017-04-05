import re
def domain_name(url):
    return re.findall(r'(//www.)?([a-zA-Z-]+)',url)[1][1] 
    
    
#top rated
def domain_name(url):
    return url.split("//")[-1].split("www.")[-1].split(".")[0]
