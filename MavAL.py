import psycopg2
import MavALCreds as creds
import sys
from domain import Anime, Manga, User
from domain import AnimeRecord, MangaRecord
from domain import AnimeReview, MangaReview
from psycopg2 import extensions
from datetime import date
from os import name, system
from sys import exit

# Connect to PostgreSQL
conn = psycopg2.connect("dbname = " + creds.database + " user = " + creds.user + " password = " + creds.password)

# get the isolation level for autocommit
autocommit = extensions.ISOLATION_LEVEL_AUTOCOMMIT

# set the isolation level for the connection's cursors
# will raise ActiveSqlTransaction exception otherwise
conn.set_isolation_level(autocommit)
cur = conn.cursor()

#class MavAL:
 #   test = 1


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
    query1 = ("""INSERT INTO maval_user (username, first_name, last_name, user_password, email, creation_date)
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


# Creates and returns User object
def login():

    loginAttempts = 0
    userInfo = None

    while userInfo is None:
        print()
        print("Login")
        print()
        # Prompt user's to input their login info
        username = input("Username: ")
        password = input("Password: ")

        # Obtaining user info from the database
        query = ("""SELECT * FROM maval_user
                    WHERE username = %s
                    AND user_password = %s """)
        cur.execute(query, (username, password))

        # Store user info in userInfo
        userInfo = cur.fetchone()

        # Max login attempts is 5
        if loginAttempts == 5:
            print()
            print("Too many login attempts.")
            exit(0)
        # Case: User has not registered/ empty set
        elif userInfo is None:
            clear()
            print("Username or password is incorrect. Please try again.")
            loginAttempts += 1
            continue

    userLogin = User.User(userInfo[0], userInfo[1], userInfo[2], userInfo[3], userInfo[4], userInfo[5])
    clear()
    return userLogin


def registerNewUser():
    print("Registration \n")
    print()

    # Prompt users to input their information
    firstName = input("First name: ")
    lastName = input("Last name: ")
    username = input("Username: ")
    password = input("Password: ")
    email = input("Email: ")

    insertUser(username, firstName, lastName, password, email)
    clear()


# Clears terminal screen
def clear():
    # for windows
    if name == 'nt':
        _ = system('cls')

    # for mac and linux(here, os.name is 'posix')
    else:
        _ = system('clear')


# Main program
if __name__ == "__main__":
    # Clear screen
    clear()
    print("Welcome to MavAL!")
    print()

    # List start options for user
    print("1. Login \n"
          "2. Register \n")

    # Initialize variables
    validOption = False
    userInput = 0

    # Prompt user to choose a valid option from list
    while not validOption:
        userInput = int(input("Select option number: "))

        if userInput in (1,2):
            validOption = True
        else:
            print("Invalid option. Please try again.")
    clear()

    # Login
    if userInput == 1:
        user = login()

    # Register then login
    elif userInput == 2:
        registerNewUser()
        user = login()

    # List user options
    print("User Options:")
    print()
    print("1. My Anime \n"
          "2. My Manga \n"
          "3. Add anime \n"
          "4. Add manga \n"
          "5. All Anime \n"
          "6. All Manga \n"
          "7. Edit profile \n"
          "8. Add anime to database \n"
          "9. Add manga to database \n")

    # Prompt user to choose a valid option from list
    validOption = False

    while not validOption:
        userInput = int(input("Select option number: "))

        if 1 <= userInput <= 9:
            validOption = True
        else:
            print("Invalid option. Please try again.")

    # View user's anime
    # if(userInput == 1):
     #   user.viewAnimeList(cur)
    # elif(userInput == 2):
    # elif(userInput == 3):
    # elif(userInput == 4):
    # elif(userInput == 5):
    # elif(userInput == 6):
    # elif(userInput == 7):
    # elif(userInput == 8):


cur.close()
conn.close()
