class MavAL:
    test = 1

class Anime:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return self.name

class User:
    def __init__(self, name):
        self.name = name

    animeList = []

    def addToList(self, anime):
        self.animeList.append(anime)

    def __str__(self):
        animeListStr = ""
        for anime in self.animeList:
            animeListStr += anime.__str__() + ", "
        return self.name + ": " + animeListStr + "\n"



if (__name__ == "__main__"):
    mab = User("maB")
    anime1 = Anime("One Piece")
    anime2 = Anime("Hunter x Hunter")
    mab.addToList(anime1)
    mab.addToList(anime2)
    print(mab)