x_beats_y = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
}

def rps(p1, p2):
    if p1 == p2:
        return 'Draw!'
    elif x_beats_y[p1] == p2:
        return 'Player 1 won!'
    else: 
        return 'Player 2 won!'
