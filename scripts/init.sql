CREATE TABLE anime (
   title               varchar(100) NOT NULL PRIMARY KEY,
   episodes            integer,
   description         varchar,
   rating              decimal,
   release_date        date,
   status              varchar(40)
);

CREATE TABLE manga (
    title               varchar(100) NOT NULL PRIMARY KEY,
    chapters            integer,
    description         varchar,
    author              varchar(50),
    artist              varchar(50),
    rating              decimal,
    release_date        date,
    status              varchar(40)
);

CREATE TABLE maval_user (
     username            varchar(20) NOT NULL PRIMARY KEY,
     first_name          varchar(40) NOT NULL,
     last_name           varchar(40),
     password            varchar NOT NULL,
     email               varchar,
     creation_date       date NOT NULL
);

CREATE TABLE watchRecord (
     username            varchar(20),
     title               varchar(100),
     ep_watched          int,
     watch_status        varchar(20),
     user_rating         decimal,
     start_date          date,
     completion_date     date,
     comments            varchar,
     favourite           BOOLEAN NOT NULL,
     FOREIGN KEY (username) REFERENCES maval_user(username),
     FOREIGN KEY (title) REFERENCES manga(title)
);

CREATE TABLE read_record (
     username            varchar(20),
     title               varchar(100),
     chapters_read       int,
     read_status         varchar(20),
     user_rating         decimal,
     start_date          date,
     completion_date     date,
     comments            varchar,
     favourite           BOOLEAN NOT NULL,
     FOREIGN KEY (username) REFERENCES maval_user(username),
     FOREIGN KEY (title) REFERENCES manga(title)
);

CREATE TABLE anime_review (
      username            varchar(20),
      title               varchar(100),
      user_rating         decimal,
      watch_status        varchar(20),
      ep_watched          int,
      date_written        date,
      review              varchar,
      FOREIGN KEY (username) REFERENCES maval_user(username),
      FOREIGN KEY (title) REFERENCES manga(title)
);

CREATE TABLE manga_review (
       username            varchar(20),
       title               varchar(100),
       user_rating         decimal,
       watch_status        varchar(20),
       chapters_read       int,
       date_written        date,
       review              varchar,
       FOREIGN KEY (username) REFERENCES maval_user(username),
       FOREIGN KEY (title) REFERENCES manga(title)
);