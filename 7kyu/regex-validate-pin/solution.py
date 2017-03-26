import re
def validate_pin(pin):
    regex1 = r'\d{4}\b'
    regex2 = r'\d{6}\b'
    return bool(re.match(regex1,pin) or re.match(regex2,pin))

#top rated
def validate_pin(pin):
	return len(pin) in (4,6) and pin.isdigit()
