import re
def remove_url_anchor(url):
    return re.match(r'[^#]*',url).group(0)

#top rated
def remove_url_anchor(url):
  return url.split('#')[0]
