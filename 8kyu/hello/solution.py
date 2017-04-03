import re
def validate_hello(greetings):
    regex = r'hello|ciao|salut|hallo|hola|ahoj|czesc'
    return bool(re.search(regex, greetings, re.IGNORECASE))
