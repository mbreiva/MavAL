import psycopg2
import MavALCreds as creds
from psycopg2 import extensions

# Connect to PostgreSQL DBMS
conn = psycopg2.connect("user = " + creds.user + " password = " + creds.password)

# get the isolation leve for autocommit
autocommit = extensions.ISOLATION_LEVEL_AUTOCOMMIT
print("ISOLATION_LEVEL_AUTOCOMMIT:", extensions.ISOLATION_LEVEL_AUTOCOMMIT)

# set the isolation level for the connection's cursors
# will raise ActiveSqlTransaction exception otherwise
conn.set_isolation_level(autocommit)

# Obtain DB cursor
cur = conn.cursor()
databaseName = creds.database

# Create table statement
sqlCreateDatabase = "CREATE DATABASE " + databaseName + ";"

# Create a table in PostgreSQL database
cur.execute(sqlCreateDatabase)

def create_tables():
    """ create tables in the PostgreSQL database"""
    commands = (
        """
        CREATE TABLE anime (
            title               varchar(100) NOT NULL PRIMARY KEY,
            episodes            integer NOT NULL,
            description         varchar,
            rating              decimal,
            releaseDate         date,
            status              varchar(40)
        )
        """,
        """ 
        CREATE TABLE manga (
            title               varchar(100) NOT NULL PRIMARY KEY,
            chapters            integer NOT NULL,
            description         varchar,
            author              varchar(50),
            artist              varchar(50),
            rating              decimal,
            releaseDate         date,
            status              varchar(40)
        )
        """,
        """
        CREATE TABLE user (
            username            varchar(20) NOT NULL PRIMARY KEY,
            firstName           varchar(40) NOT NULL,
            lastName            varchar(40),
            password            varchar NOT NULL,
            email               varchar,
            creationDate        date NOT NULL
        )
        """,
        """
        CREATE TABLE watchRecord (
            username            varchar(20) FOREIGN KEY REFERENCES user(username),
            title               varchar(100) FOREIGN KEY REFERENCES anime(title),
            epWatched           int,
            watchStatus         varchar(20),
            userRating          decimal,
            startDate           date,
            completionDate      date,
            comments            varchar,
            favourite           BOOLEAN NOT NULL
        )
        """,
        """
        CREATE TABLE readRecord (
            username            varchar(20) FOREIGN KEY REFERENCES user(username),
            title               varchar(100) FOREIGN KEY REFERENCES manga(title),
            chaptersRead        int,
            readStatus          varchar(20),
            userRating          decimal,
            startDate           date,
            completionDate      date,
            comments            varchar,
            favourite           BOOLEAN NOT NULL
        )
        """,
        """
        CREATE TABLE animeReview (
            username            varchar(20) FOREIGN KEY REFERENCES user(username),
            title               varchar(100) FOREIGN KEY REFERENCES anime(title),
            userRating          decimal,
            watchStatus         varchar(20), 
            epWatched           int,
            date                date,
            review              varchar
        )
        """,
        """
        CREATE TABLE mangaReview (
            username            varchar(20) FOREIGN KEY REFERENCES user(username),
            title               varchar(100) FOREIGN KEY REFERENCES manga(title),
            userRating          decimal,
            watchStatus         varchar(20), 
            chaptersRead        int,
            date                date,
            review              varchar
        )
        """
    )

    try:
        # create table one by one
        for command in commands:
            cur.execute(command)
        # close communication with the PostgreSQL database server
        cur.close()
        # commit the changes
        conn.commit()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()

