CREATE TABLE media (
    media_id            serial NOT NULL PRIMARY KEY,
    media_type          varchar NOT NULL,
    title               varchar NOT NULL,
    description         text,
    rating              decimal,
    status              varchar,
    release_date        date
);
CREATE TABLE anime (
    anime_id            int NOT NULL PRIMARY KEY REFERENCES media(media_id),
    episode_count       int,
    studio              varchar
);

CREATE TABLE manga (
    manga_id            int NOT NULL PRIMARY KEY REFERENCES media(media_id),
    chapter_count       int,
    author              varchar,
    artist              varchar
);

CREATE TABLE maval_user (
    user_id             serial NOT NULL PRIMARY KEY,
    username            varchar(50) NOT NULL,
    first_name          varchar(50) NOT NULL,
    last_name           varchar(50),
    user_password       varchar(30) NOT NULL, --do I have to change name?
    email               varchar(100),
    creation_date       date NOT NULL
);

CREATE TABLE user_record (
    record_id           serial NOT NULL PRIMARY KEY,
    user_id             int NOT NULL,
    media_id            int NOT NULL,
    user_rating         decimal,
    start_date          date,
    completion_date     date,
    isFavourite         boolean NOT NULL DEFAULT FALSE,
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
    FOREIGN KEY(user_id) REFERENCES maval_user(user_id),
    FOREIGN KEY(media_id) REFERENCES media(media_id),
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
