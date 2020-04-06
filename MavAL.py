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

# Returns all anime in the database
def viewAllAnime():
    query = "SELECT * FROM anime;"
    cur.execute(query)


def viewAllManga():
    query = "SELECT * FROM manga;"
    cur.execute(query)


# DATABASE INSERTION
# Insert user data to mav_al user table in Postgres
def insertUser(username, firstName, lastName, password, email):
    query1 = ("""INSERT INTO maval_user
                VALUES ( %s, %s, %s, %s, %s, %s)""")
    today = date.today()
    creationDate = today.strftime("%Y/%m/%d")  # date format for Postgres
    cur.execute(query1,(username, firstName, lastName, password, email, creationDate))

    query2 = ("""SELECT user_id FROM maval_user
                 WHERE username = %s
                 AND first_name = %s
                 AND last_name = %s
                 AND email = %s""")
    cur.execute(query2, (username, firstName, lastName, email))

    # Get unique user ID from PostgreSQL database to create User object
    userID = cur.fetchone()


def insertAnime(title, episodeCount, description, status, releaseDate):
    query1 = ("""INSERT INTO anime
               VALUES ( %s, %s, %s, %s, %s)""")
    cur.execute(query1,(title, episodeCount, description, status, releaseDate))

    query2 = ("""SELECT anime_id from anime
                 WHERE title = %s 
                 AND episode_count = %s
                 AND description = %s
                 AND status = %s
                 AND release_date = %s""")
    cur.execute(query2, (title, episodeCount, description, status, releaseDate))


def insertManga(title, chapterCount, description, status, releaseDate):
    query1 = ("""INSERT INTO manga
               VALUES ( %s, %s, %s, %s, %s)""")
    cur.execute(query1, (title, chapterCount, description, status, releaseDate))

    query2 = ("""SELECT manga_id from manga
                 WHERE title = %s 
                 AND chapter_count = %s
                 AND description = %s
                 AND status = %s
                 AND release_date = %s""")
    cur.execute(query2, (title, chapterCount, description, status, releaseDate))


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


def insertAnimeReview(animeReview):
    query = ("""INSERT INTO anime_review
                VALUES(%s, %s, %s, %s)""")
    dateWritten = animeReview.date.strftime("%Y/%m/%d")
    cur.execute(query,(animeReview.userID, animeReview.animeID, dateWritten, animeReview.review))


def insertMangaReview(mangaReview):
    query = ("""INSERT INTO manga_review
                VALUES(%s, %s, %s, %s)""")
    dateWritten = mangaReview.date.strftime("%Y/%m/%d")
    cur.execute(query,(mangaReview.userID, mangaReview.mangaID, dateWritten, mangaReview.review))


def login(username, password):
    query = ("""SELECT * FROM maval_user
                WHERE username = %s
                AND password = %s """)
    cur.execute(query, (username, password))

    User = cur.fetchone()


def registerNewUser():
    firstName = input("First name: \n")
    lastName = input("Last name: \n")
    username = input("Username: \n")
    password = input("Password: \n")
    email = input("Email: \n")

    insertUser(username, firstName, lastName, password, email)

if (__name__ == "__main__"):
    User1 = User("mab")
    User1.createUser("test4", "Testing", "Testing", "password","test@gmail.com")
    User1.createWatchRecord("test3", "Gintama", 2, "Watching", 10, NULL, NULL, NULL, false)

cur.close()
conn.close()
