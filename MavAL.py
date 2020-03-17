class MavAL:
    test = 1

class Anime:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return self.name

    genreList = []
    episodeTotal = 0
    status = ""
    userRatings = []
    rating = 0.0
    relatedSeries = []
    tagList = []

    def updateGenreList(self, newGenre):
        self.genreList.append(newGenre)

    def updateRating(self, newRating):
        self.userRatings.append(newRating)
        ratingSum = 0
        for rating in self.userRatings:
            ratingSum += rating
        rating = ratingSum / len(self.userRatings)

    def updateStatus(self, newStatus):
        self.status = newStatus



class User:
    def __init__(self, name):
        self.name = name

    animeList = []

    def add(self, anime):
        self.animeList.append(anime)

    def remove(self, anime):
        self.animeList.remove(anime)

    def __str__(self):
        animeListStr = ""
        for anime in self.animeList:
            # if first, just add name
            animeListStr += ", " + anime.__str__()
        return self.name + ": " + animeListStr + "\n"



if (__name__ == "__main__"):
    mab = User("maB")
    anime1 = Anime("One Piece")
    anime2 = Anime("Hunter x Hunter")
    mab.addToList(anime1)
    mab.addToList(anime2)
    mab.remove(anime1)
    print(mab)