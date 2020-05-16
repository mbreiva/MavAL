CREATE TABLE media (
    media_id            serial NOT NULL PRIMARY KEY,
    media_type          varchar NOT NULL, --anime or manga
    title               varchar NOT NULL,
    description         text,
    rating              decimal,
    status              varchar,
    release_date        date
);
CREATE TABLE anime (
    anime_id            int NOT NULL PRIMARY KEY,
    episode_count       int,
    studio              varchar,
    FOREIGN KEY(anime_id) REFERENCES media(media_id)
);

 -- Author and artist are in different table, accessed by manga_id
CREATE TABLE manga (
    manga_id            int NOT NULL PRIMARY KEY,
    chapter_count       int,
    FOREIGN KEY(manga_id) REFERENCES media(media_id)
);

CREATE TABLE maval_user (
    user_id             serial NOT NULL PRIMARY KEY,
    username            varchar(50) NOT NULL,
    first_name          varchar(50) NOT NULL,
    last_name           varchar(50),
    user_password       varchar(30) NOT NULL,
    email               varchar(100),
    creation_date       date NOT NULL,
    isAdmin             boolean NOT NULL DEFAULT FALSE
);

CREATE TABLE user_record (
    record_id           serial NOT NULL PRIMARY KEY,
    user_id             int NOT NULL,
    media_id            int NOT NULL, -- anime_id and manga_id may clash
    episodes_watched    int,    -- one of these will be null depending
    chapters_read       int,    -- on if it is an anime or manga
    user_rating         decimal,
    start_date          date,
    completion_date     date,
    isFavourite         boolean NOT NULL DEFAULT FALSE, -- Favourites table?
    isPublic            boolean NOT NULL DEFAULT TRUE,
    FOREIGN KEY(user_id) REFERENCES maval_user(user_id),
    FOREIGN KEY(media_id) REFERENCES media(media_id)
);


CREATE TABLE anime_record (
    anime_record_id     serial NOT NULL PRIMARY KEY,
    record_id           int NOT NULL,
    episodes_watched    int,
    FOREIGN KEY(record_id) REFERENCES user_record(record_id)
);

CREATE TABLE manga_record (
    manga_record_id     serial NOT NULL PRIMARY KEY,
    record_id           int NOT NULL,
    chapters_read       int,
    FOREIGN KEY (record_id) REFERENCES user_record(record_id)
);

CREATE TABLE review (
    review_id           serial NOT NULL PRIMARY KEY,
    record_id           int NOT NULL,
    date_written        date,
    review              text,
    FOREIGN KEY(record_id) REFERENCES user_record(record_id)
);

CREATE TABLE genre (
    genre_id            serial NOT NULL PRIMARY KEY,
    genre               varchar NOT NULL UNIQUE
);

CREATE TABLE author (
    author_id           serial NOT NULL PRIMARY KEY,
    first_name          varchar NOT NULL,
    last_name           varchar
);

CREATE TABLE artist (
    artist_id           serial NOT NULL PRIMARY KEY,
    first_name          varchar NOT NULL,
    last_name           varchar
);

CREATE TABLE status (
    status_id           serial NOT NULL PRIMARY KEY,
    status              varchar NOT NULL UNIQUE
);

-- LINK TABLE BETWEEN manga AND author
-- For cases, where same name or multiple authors
CREATE TABLE manga_author (
    manga_id            int NOT NULL,
    author_id           int NOT NULL,
    FOREIGN KEY(manga_id) REFERENCES manga(manga_id),
    FOREIGN KEY(author_id) REFERENCES author(author_id)
);

-- LINK TABLE BETWEEN manga AND artist
CREATE TABLE manga_artist (
    manga_id            int NOT NULL,
    artist_id           int NOT NULL,
    FOREIGN KEY(manga_id) REFERENCES manga(manga_id),
    FOREIGN KEY(artist_id) REFERENCES artist(artist_id)
);

-- LINK TABLE BETWEEN status AND record
CREATE TABLE record_status (
    record_id           int NOT NULL,
    status_id           int NOT NULL,
    FOREIGN KEY(record_id) REFERENCES user_record(record_id),
    FOREIGN KEY(status_id) REFERENCES status(status_id)
);

-- LINK TABLE BETWEEN MEDIA AND GENRES
CREATE TABLE media_genre (
    media_id            int NOT NULL,
    genre_id            int NOT NULL,
    FOREIGN KEY(media_id) REFERENCES media(media_id),
    FOREIGN KEY(genre_id) REFERENCES genre(genre_id)
);

-- LINK TABLE BETWEEN ANIME AND MANGA
CREATE TABLE anime_adaptation (
    anime_id            serial,
    manga_id            serial,
    FOREIGN KEY(anime_id) REFERENCES anime(anime_id),
    FOREIGN KEY(manga_id) REFERENCES manga(manga_id)
);
