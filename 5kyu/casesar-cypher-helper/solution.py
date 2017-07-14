class CaesarCipher(object):
    def __init__(self, shift):
        self.shift = shift
        self.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    def encode(self, str):
        return ('').join([self.get_new_char_encode(x) for x in str.upper()])
        
    def decode(self, str):
        return ('').join([self.get_new_char_decode(x) for x in str.upper()])
        
    def get_new_char_encode(self,char):
        return self.alphabet[(self.alphabet.index(char)+self.shift) % 26] if char in self.alphabet else char
    
    def get_new_char_decode(self, char):
        return self.alphabet[(self.alphabet.index(char)-self.shift) % 26] if char in self.alphabet else char
