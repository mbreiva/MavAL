## Run the app from a dev environment

If haven't have
Run app using the gradle wrapper

```
-- make sure you're in the root of the project folder
./gradlew run
```

Your app should be accessible on port 8080 of your localhost (http://localhost:8080/)

## Database setup (docker)

We use docker for easier setup, so install it if you haven't already.

```
-- install the docker image
docker pull postgres

-- create the image
docker run --name maval -e POSTGRES_PASSWORD=test -e  POSTGRES_DB=maval -d postgres
```
