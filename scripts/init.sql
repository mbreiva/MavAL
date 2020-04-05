CREATE TABLE anime (
    anime_id            serial,
    title               varchar NOT NULL PRIMARY KEY,
    episode_count       integer,
    description         varchar,
    rating              decimal,
    status              varchar,
    release_date        date,
    sequelBool          BOOLEAN,
    prequelBool         BOOLEAN
);

CREATE TABLE manga (
    manga_id            serial,
    title               varchar NOT NULL PRIMARY KEY,
    chapter_count       integer,
    description         varchar,
    author              varchar,
    artist              varchar,
    rating              decimal,
    status              varchar,
    release_date        date,
    sequelBool          BOOLEAN,
    prequelBool         BOOLEAN
);

CREATE TABLE maval_user (
    user_id             serial NOT NULL PRIMARY KEY,
    username            varchar NOT NULL,
    first_name          varchar NOT NULL,
    last_name           varchar,
    password            varchar NOT NULL,
    email               varchar,
    creation_date       date NOT NULL
)

CREATE TABLE anime_record (
    user_id             serial,
    title               varchar,
    ep_watched          int,
    watch_status        varchar NOT NULL, -- how to make this 3 options?
    user_rating         decimal,
    start_date          date,
    completion_date     date,
    favourite           BOOLEAN NOT NULL,
    FOREIGN KEY (user_id) REFERENCES maval_user(user_id),
    FOREIGN KEY (title) REFERENCES manga(title)
);

CREATE TABLE manga_record (
    user_id             serial,
    title               varchar,
    chapters_read       int,
    read_status         varchar NOT NULL, -- how to make this 3 options?
    user_rating         decimal,
    start_date          date,
    completion_date     date,
    favourite           BOOLEAN NOT NULL,
    FOREIGN KEY (user_id) REFERENCES maval_user(user_id),
    FOREIGN KEY (title) REFERENCES manga(title)
);

CREATE TABLE anime_review (
    user_id             serial,
    title               varchar,
    date_written        date,
    review              varchar,
    FOREIGN KEY (user_id) REFERENCES maval_user(user_id),
    FOREIGN KEY (title) REFERENCES manga(title)
);

CREATE TABLE manga_review (
    user_id             serial,
    title               varchar,
    date_written        date,
    review              varchar,
    FOREIGN KEY (user_id) REFERENCES maval_user(user_id),
    FOREIGN KEY (title) REFERENCES manga(title)
);

CREATE TABLE review (
    review_id           serial,
    date_written        date,
    review              varchar
)

