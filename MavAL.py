import psycopg2
import MavALCreds as creds
from psycopg2 import extensions

# Connect to PostgreSQL DBMS
conn = psycopg2.connect("user = " + creds.PGUSER + " password = " + creds.PGPASSWORD)

# get the isolation leve for autocommit
autocommit = extensions.ISOLATION_LEVEL_AUTOCOMMIT
print("ISOLATION_LEVEL_AUTOCOMMIT:", extensions.ISOLATION_LEVEL_AUTOCOMMIT)

# set the isolation level for the connection's cursors
# will raise ActiveSqlTransaction exception otherwise
conn.set_isolation_level(autocommit)

# Obtain DB cursor
cursor = conn.cursor()
databaseName = creds.PGDATABASE

# Create table statement
sqlCreateDatabase = "CREATE DATABASE " + databaseName + ";"

# Create a table in PostgreSQL database
cursor.execute(sqlCreateDatabase)


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

class Manga:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return self.name

    genreList = []
    chapterTotal = 0
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
    mangaList = []

    def addAnime(self, anime):
        self.animeList.append(anime)

    def removeAnime(self, anime):
        self.animeList.remove(anime)

    def addManga(self, manga):
        self.mangaList.append(manga)

    def removeManga(self, manga):
        self.mangaList.remove(manga)

    def __str__(self):
        animeListStr = ""
        for anime in self.animeList:
            animeListStr += anime.__str__() + ", "

        mangaListStr = ""

        for manga in self.mangaList:
            mangaListStr += manga.__str__() + ", "

        return self.name + ": " + animeListStr + "\n" + mangaListStr



if (__name__ == "__main__"):
    mab = User("maB")
    anime1 = Anime("One Piece")
    anime2 = Anime("Hunter x Hunter")
    manga1 = Manga("One Piece")
    manga2 = Manga("One Punch Man")
    mab.addAnime(anime1)
    mab.addAnime(anime2)
    mab.addManga(manga1)
    mab.addManga(manga2)
    print(mab)