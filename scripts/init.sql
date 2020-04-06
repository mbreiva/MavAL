CREATE TABLE anime (
    anime_id            serial,
    title               varchar NOT NULL PRIMARY KEY,
    episode_count       integer,
    description         text,
    rating              decimal,
    status              varchar,
    release_date        date
);

CREATE TABLE manga (
    manga_id            serial,
    title               varchar NOT NULL PRIMARY KEY,
    chapter_count       integer,
    description         text,
    author              varchar,
    artist              varchar,
    rating              decimal,
    status              varchar,
    release_date        date
);

CREATE TABLE maval_user (
    user_id             serial NOT NULL PRIMARY KEY,
    username            varchar(50) NOT NULL,
    first_name          varchar(50) NOT NULL,
    last_name           varchar(50),
    user_password            varchar(30) NOT NULL, --do I have to change name?
    email               varchar(100),
    creation_date       date NOT NULL
)

CREATE TABLE anime_record (
    anime_record_id     serial NOT NULL PRIMARY KEY,
    user_id             serial,
    anime_id            serial,
    ep_watched          int,
    watch_status        varchar NOT NULL, -- how to make this 3 options?
    user_rating         decimal,
    start_date          date,
    completion_date     date,
    favourite           BOOLEAN NOT NULL DEFAULT FALSE,
    isPublic            BOOLEAN NOT NULL DEFAULT TRUE,
    FOREIGN KEY (user_id) REFERENCES maval_user(user_id),
    FOREIGN KEY (anime_id) REFERENCES manga(anime_id)
);

CREATE TABLE manga_record (
    manga_record_id     serial NOT NULL PRIMARY KEY,
    user_id             serial,
    manga_id            serial,
    chapters_read       int,
    read_status         varchar NOT NULL, -- how to make this 3 options?
    user_rating         decimal,
    start_date          date,
    completion_date     date,
    favourite           BOOLEAN NOT NULL,
    isPublic            BOOLEAN NOT NULL DEFAULT TRUE,
    FOREIGN KEY (user_id) REFERENCES maval_user(user_id),
    FOREIGN KEY (manga_id) REFERENCES manga(manga_id)
);

CREATE TABLE anime_review (
    user_id             serial,
    anime_id            serial,
    date_written        date,
    review              text,
    FOREIGN KEY (user_id) REFERENCES maval_user(user_id),
    FOREIGN KEY (anime_id) REFERENCES manga(anime_id)
);

CREATE TABLE manga_review (
    user_id             serial,
    manga_id            serial,
    date_written        date,
    review              text,
    FOREIGN KEY (user_id) REFERENCES maval_user(user_id),
    FOREIGN KEY (manga_id) REFERENCES manga(manga_id)
);

CREATE TABLE review (
    review_id           serial,
    date_written        date,
    review              varchar
);

CREATE TABLE anime_adaptation (
    anime_id            serial,
    manga_id            serial,
    FOREIGN KEY(anime_id) REFERENCES anime(anime_id),
    FOREIGN KEY(manga_id) REFERENCES manga(manga_id)
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
-- Table for rating?

