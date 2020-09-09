# Database setup (docker)
Use docker for easier setup. 
```
-- install the docker image 
docker pull postgres

-- create the image
docker run --name maval -e POSTGRES_PASSWORD=test -e  POSTGRES_DB=maval -d postgres
```
