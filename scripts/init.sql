CREATE TABLE anime (
   anime_id            serial NOT NULL PRIMARY KEY,
   title               varchar(100) NOT NULL PRIMARY KEY,
   episode_total       integer,
   description         varchar,
   rating              decimal,
   release_date        date,
   status              varchar(40)
);

CREATE TABLE manga (
    manga_id            serial NOT NULL PRIMARY KEY,
    title               varchar(100) NOT NULL PRIMARY KEY,
    chapter_total       integer,
    description         varchar,
    author              varchar(50),
    artist              varchar(50),
    rating              decimal,
    release_date        date,
    status              varchar(40)
);

CREATE TABLE maval_user (
     user_id             serial NOT NULL PRIMARY KEY,
     username            varchar NOT NULL,
     first_name          varchar NOT NULL,
     last_name           varchar,
     password            varchar NOT NULL,
     email               varchar,
     creation_date       date NOT NULL
);

CREATE TABLE anime_record (
     user_id             serial,
     anime_id            serial,
     ep_watched          int,
     watch_status        varchar(20) NOT NULL, -- how to make this 3 options?
     user_rating         decimal,
     start_date          date,
     completion_date     date,
     comments            varchar,
     favourite           BOOLEAN NOT NULL,
     FOREIGN KEY (user_id) REFERENCES maval_user(user_id),
     FOREIGN KEY (anime_id) REFERENCES manga(anime_id)
);

CREATE TABLE manga_record (
     user_id             serial,
     manga_id            serial,
     chapters_read       int,
     read_status         varchar(20) NOT NULL, -- how to make this 3 options?
     user_rating         decimal,
     start_date          date,
     completion_date     date,
     comments            varchar,
     favourite           BOOLEAN NOT NULL,
     FOREIGN KEY (user_id) REFERENCES maval_user(user_id),
     FOREIGN KEY (manga_id) REFERENCES manga(manga_id)
);

CREATE TABLE anime_review (
      user_id             serial,
      anime_id            serial,
      date_written        date,
      review              varchar,
      FOREIGN KEY (user_id) REFERENCES maval_user(user_id),
      FOREIGN KEY (anime_id) REFERENCES manga(anime_id)
);

CREATE TABLE manga_review (
       user_id             serial,
       manga_id            serial,
       date_written        date,
       review              varchar,
       FOREIGN KEY (user_id) REFERENCES maval_user(user_id),
       FOREIGN KEY (manga_id) REFERENCES manga(manga_id)
);