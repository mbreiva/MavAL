#!/bin/bash

# download anime json data
wget -O anime.json https://raw.githubusercontent.com/manami-project/anime-offline-database/master/anime-offline-database.json

# wrangle it to csv
python3 parse_db.py
python3 parse_manga_db.py

# insert data into postgres
psql -h localhost -p 5001 -d maval -U postgres -c \
    "\COPY media(media_type_id, title, status, release_date, episode_count) 
        FROM './anime.csv' WITH (FORMAT CSV, DELIMITER ',', FORCE_NULL (release_date), HEADER TRUE)"
psql -h localhost -p 5001 -d maval -U postgres -c \
    "\COPY media(media_type_id, title, status, release_date, chapter_count, image_source)
        FROM './manga.csv' WITH (FORMAT CSV, DELIMITER ',', FORCE_NULL (release_date), HEADER TRUE)"
