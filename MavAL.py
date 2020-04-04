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


def insertUser(user):
    query = ("""INSERT INTO maval_user
                VALUES ( %s, %s, %s, %s, %s, %s)""")
    today = date.today()
    creationDate = today.strftime("%Y/%m/%d")
    cur.execute(query,
                (user.username,
                 user.firstName,
                 user.lastName,
                 user.password,
                 user.email,
                 user.creationDate)
                )

def selectUser(username, password):
    query = ("""SELECT * 
                FROM maval_user
                WHERE username = """ + username + """
                AND password = """ + password)
    cur.execute(query)

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