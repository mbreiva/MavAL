## Run the app from a dev environment

1. Follow the instructions below to first set up the database
2. Run the app using the gradle wrapper

```bash
# make sure you're in the root of the project folder
./gradlew bootRun
```

Your app should be accessible on port 8080 of your localhost (http://localhost:8080/)

## Database setup (docker)

We use docker for easier setup, so install it if you haven't already.

```bash
# install the docker image
docker pull postgres

# create the container
docker run --name maval -e POSTGRES_PASSWORD=test -e  POSTGRES_DB=maval -d -p 5001:5432 postgres

# start the container
docker start maval
```
