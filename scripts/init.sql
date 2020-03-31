CREATE TABLE anime (
   title               varchar(100) NOT NULL PRIMARY KEY,
   episodes            integer NOT NULL,
   description         varchar,
   rating              decimal,
   releaseDate         date,
   status              varchar(40)
);

CREATE TABLE manga (
    title               varchar(100) NOT NULL PRIMARY KEY,
    chapters            integer NOT NULL,
    description         varchar,
    author              varchar(50),
    artist              varchar(50),
    rating              decimal,
    releaseDate         date,
    status              varchar(40)
);

CREATE TABLE mavALUser (
     username            varchar(20) NOT NULL PRIMARY KEY,
     firstName           varchar(40) NOT NULL,
     lastName            varchar(40),
     password            varchar NOT NULL,
     email               varchar,
     creationDate        date NOT NULL
);

CREATE TABLE watchRecord (
     username            varchar(20) FOREIGN KEY REFERENCES user(username),
     title               varchar(100) FOREIGN KEY REFERENCES anime(title),
     epWatched           int,
     watchStatus         varchar(20),
     userRating          decimal,
     startDate           date,
     completionDate      date,
     comments            varchar,
     favourite           BOOLEAN NOT NULL
);

CREATE TABLE readRecord (
     username            varchar(20) FOREIGN KEY REFERENCES user(username),
     title               varchar(100) FOREIGN KEY REFERENCES manga(title),
     chaptersRead        int,
     readStatus          varchar(20),
     userRating          decimal,
     startDate           date,
     completionDate      date,
     comments            varchar,
     favourite           BOOLEAN NOT NULL
);

CREATE TABLE animeReview (
      username            varchar(20) FOREIGN KEY REFERENCES user(username),
      title               varchar(100) FOREIGN KEY REFERENCES anime(title),
      userRating          decimal,
      watchStatus         varchar(20),
      epWatched           int,
      dateWritten         date,
      review              varchar
)

CREATE TABLE mangaReview (
       username            varchar(20) FOREIGN KEY REFERENCES user(username),
       title               varchar(100) FOREIGN KEY REFERENCES manga(title),
       userRating          decimal,
       watchStatus         varchar(20),
       chaptersRead        int,
       dateWritten         date,
       review              varchar
);