def namelist(names):
    str = ''
    num_names = len(names)
    for i, x in enumerate(names):
        if i < num_names - 2:
            str += '{}, '.format(x['name']) 
        elif i == num_names - 2:
            str += '{} & '.format(x['name']) 
        else:
            str += x['name']
    return str
    
##top rated
def namelist(names):
    if len(names)==0: return ''
    if len(names)==1: return names[0]['name']
    return ', '.join([n['name'] for n in names[:-1]]) + ' & ' + names[-1]['name']
    
def namelist(names):
    return " ".join([names[i]["name"] + (" &" if i == len(names)-2 else "" if i==len(names)-1 else ",") for i in range(len(names))])
