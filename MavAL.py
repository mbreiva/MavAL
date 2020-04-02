import psycopg2
import MavALCreds as creds
from psycopg2 import extensions
from datetime import date

# Connect to PostgreSQL
conn = psycopg2.connect("dbname = " + creds.database + " user = " + creds.user + " password = " + creds.password)

# get the isolation level for autocommit
autocommit = extensions.ISOLATION_LEVEL_AUTOCOMMIT

# set the isolation level for the connection's cursors
# will raise ActiveSqlTransaction exception otherwise
conn.set_isolation_level(autocommit)
cur = conn.cursor()


class MavAL:
    test = 1


class Anime:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return self.name

    def addTitle(self, title):
        query = "INSERT INTO anime(title) VALUES(%s);"
        cur.execute(query, (title,))

   # def updateGenreList(self, newGenre):


   # def updateRating(self, newRating):


   # def updateStatus(self, newStatus):



class Manga:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return self.name

   # def updateGenreList(self, newGenre):


   # def updateRating(self, newRating):


   # def updateStatus(self, newStatus):



class User:
    def __init__(self, name):
        self.name = name

    def createUser(self, username, firstName, lastName, password, email):
        query = ("""INSERT INTO maval_user
                    VALUES ( %s, %s, %s, %s, %s, %s)""")
        today = date.today()
        creationDate = today.strftime("%Y/%m/%d")
        cur.execute(query, (username, firstName, lastName, password, email, creationDate))

    def createWatchRecord(self, username, title, epWatched, watchStatus, userRating, startDate, completionDate, comments, favourite):
        query = ("""INSERT INTO watch_record VALUES( %s, %s, %s, %s, %s, %s, %s, %s, %s""")

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
    User1 = User("mab")
    User1.createUser("test3", "Testing", "Testing", "password","test@gmail.com")


cur.close()
conn.close()