class Mortgage():
    __init__(self, name):
        self.name = name
        
    def applyFor(self, amount):
        result = "approved"
        if (!new Bank().verify(self.name, amount)):
            result = "denied"
        elif (!new Credit().get(self.name)):
            result = "denied"
        elif (!new Background().check(this.name)):
            result = "denied"
        
        return this.name + " has been " + result +
               " for a " + amount + " mortgage";