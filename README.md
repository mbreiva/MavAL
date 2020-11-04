# Organization

- We're currently using a monorepo for consistency and to eliminate the overhead of maintaining two seperate repos
- Code for the front and backends can be found in the `frontend` and `backend` directories respectively

# Frontend

1. For now, we can use python's `http` module to set up a local server

```bash
# make sure you're in the root of the `frontend` folder
`python3 -m http.server`
```

Your frontend app should be accessible on port 8000 of your localhost (http://localhost:8000/)

# Backend

## Run the app from a dev environment

1. Follow the database setup instructions if this is the first time running the backend
2. Run the app using the gradle wrapper

```bash
# make sure you're in the root of the `backend` folder
./gradlew bootRun
```

Your app should be accessible on port 8080 of your localhost (http://localhost:8080/)

## Database setup (using docker)

We use docker for easier setup, so install it if you haven't already.

```bash
# install the docker image
docker pull postgres

# create the container
docker run --name maval -e POSTGRES_PASSWORD=test -e  POSTGRES_DB=maval -d -p 5001:5432 postgres

# start the container
docker start maval
```
