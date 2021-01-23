#!/bin/bash

# download json data
wget -O anime.json https://raw.githubusercontent.com/manami-project/anime-offline-database/master/anime-offline-database.json

# wrangle it to csv
python3 parse_db.py

# insert data into postgres
psql -h localhost -p 5001 -d maval -U postgres -c \
    "\copy media(media_type_id, title, status, release_date, episode_count) FROM './anime.csv' WITH DELIMITER ',' CSV HEADER"
