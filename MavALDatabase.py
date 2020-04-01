import psycopg2
import MavALCreds as creds
from psycopg2 import extensions

# Connect to PostgreSQL DBMS
conn = psycopg2.connect("dbname = " + creds.database + " user = " + creds.user + " password = " + creds.password)

# get the isolation leve for autocommit
autocommit = extensions.ISOLATION_LEVEL_AUTOCOMMIT
print("ISOLATION_LEVEL_AUTOCOMMIT:", extensions.ISOLATION_LEVEL_AUTOCOMMIT)

# set the isolation level for the connection's cursors
# will raise ActiveSqlTransaction exception otherwise
conn.set_isolation_level(autocommit)

# Obtain DB cursor
cur = conn.cursor()

fd = open("scripts/init.sql", "r")
sqlFile = fd.read()
fd.close()

sqlCommands = sqlFile.split(";")

for command in sqlCommands:
    try:
        cur.execute(command)
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
