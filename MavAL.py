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

def viewAllAnime:
    query = ("SELECT * FROM anime ")
    cur.execute(query)

def viewAllManga:
    query = ("SELECT * FROM manga")

def insertUser(username, firstName, lastName, password, email):
    query1 = ("""INSERT INTO maval_user
                VALUES ( %s, %s, %s, %s, %s, %s)""")
    today = date.today()
    creationDate = today.strftime("%Y/%m/%d")
    cur.execute(query1,(username, firstName, lastName, password, email,creationDate))

    query2 = ("""SELECT user_id FROM maval_user
                 WHERE username = %s
                 AND first_name = %s
                 AND last_name = %s
                 AND email = %s""")
    cur.execute(query2, (username, firstName, lastName, email))
    userID = cur.fetchone()

def insertAnime(anime):
    query = ("""INSERT INTO anime
               VALUES ( %s, %s, %s, %s, %s)""")
    cur.execute(query,
                (anime.title,
                 anime.episodeCount,
                 anime.description,
                 anime.status,
                 anime.releaseDate)
                )

def insertManga(manga):
    query = ("""INSERT INTO manga
                VALUES ( %s, %s, %s, %s, %s)""")
    cur.execute(query,
                (manga.title,
                 manga.chapterCount,
                 manga.description,
                 manga.status,
                 manga.releaseDate)
                )

def selectUser(username, password):
    query = ("""SELECT * FROM maval_user
                WHERE username = """ + username + """
                AND password = """ + password)
    cur.execute(query)

    # Create user?
    User()

def insertAnimeRecord(animeRecord):
    query = ("""INSERT INTO anime_record 
                VALUES( %s, %s, %s, %s, %s, %s, %s, %s, %s)""")
    cur.execute(query,
                (animeRecord.username,
                 animeRecord.title,
                 animeRecord.epWatched,
                 animeRecord.watchStatus,
                 animeRecord.userRating,
                 animeRecord.startDate,
                 animeRecord.completionDate,
                 animeRecord.comments,
                 animeRecord.favourite)
                )

def insertMangaRecord(mangaRecord):
    query = ("""INSERT INTO manga_record 
                VALUES( %s, %s, %s, %s, %s, %s, %s, %s, %s)""")
    cur.execute(query,
                (mangaRecord.username,
                 mangaRecord.title,
                 mangaRecord.chaptersRead,
                 mangaRecord.readStatus,
                 mangaRecord.userRating,
                 mangaRecord.startDate,
                 mangaRecord.completionDate,
                 mangaRecord.comments,
                 mangaRecord.favourite)
                )

if (__name__ == "__main__"):
    User1 = User("mab")
    User1.createUser("test4", "Testing", "Testing", "password","test@gmail.com")
    User1.createWatchRecord("test3", "Gintama", 2, "Watching", 10, NULL, NULL, NULL, false)

cur.close()
conn.close()