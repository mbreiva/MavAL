# Organization

- We're currently using a monorepo for consistency and to eliminate the overhead of maintaining two seperate repos
- Code for the front and backends can be found in the `frontend` and `backend` directories respectively

- All following commands should be run from the root of their respective folders

# [Frontend (maval-app)](./maval-app)

1. We're using react for the frontend

```bash
# if this is your first time running the app: install dependencies (found in package.json)
npm install
# make sure you're in the root of the `frontend` folder
npm start
```

2. Your frontend app should be accessible on port 3000 of your localhost (http://localhost:3000/)

# [Backend](./backend)

## Run the app from a dev environment

1. Follow the database setup instructions if this is the first time running the backend
2. Run the app using the gradle wrapper

```bash
./gradlew bootRun
```

Your app should be accessible on port 8080 of your localhost (http://localhost:8080/)

## Database setup (using docker)

We use docker for easier setup, so install it if you haven't already.

```bash
# install the docker image
docker pull postgres

# create and start the container
docker run --name maval -e POSTGRES_PASSWORD=test -e  POSTGRES_DB=maval -d -p 5001:5432 postgres
docker start maval
```

# [Scripts](./scripts)

- This script is the transform layer for json formatted anime data from `https://github.com/manami-project/anime-offline-database`.
- It'll generate a `.csv` file from the data pulled from the project for easy insertion into postgres
- note: This requires python 3.6+

```bash
# run the init script to download the json formatted data (anime.json)
./init.sh
# run the python script to convert the json to csv (anime.csv)
python3 parse_db.py
# insert it into the db
psql -h localhost -p 5001 -d maval -c "\copy media(media_type, title, status, release_date, episode_count) FROM './anime.csv' WITH DELIMITER ',' CSV HEADER" -U postgres
```
