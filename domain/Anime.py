class Anime:
    def __init__(self, animeID, title, episodeCount, description, rating, status, releaseDate):
        self.animeID = animeID
        self.title = title
        self.episodeCount = episodeCount
        self.rating = rating
        self.description = description
        self.status = status
        self.releaseDate = releaseDate

    # Is there an AVG() ?
    def calculateRating(self, cur):
        query = ("""SELECT AVG(rating) FROM anime_record
                    WHERE anime_id = %s""")
        cur.execute(query, (self.animeID,))

        # Does this return an array if there is only one value?
        avgRating = cur.fetchone()
        return avgRating
  # Can't change title because primary key and foreign key referenced by other tables?

    def updateEpisodeCount(self, cur):
        newEpisodeCount = input("Episodes: \n")
        query = ("""UPDATE anime
                    SET episode_count = %s
                    WHERE title = %s""")
        cur.execute(query, (newEpisodeCount, self.title))

    def editDescription(self, cur):
        newDescription = input("Description: \n")
        query = ("""UPDATE anime
                    SET description = %s
                    WHERE title = %s""")
        cur.execute(query, (newDescription, self.title))

    def editStatus(self, cur):
        newStatus = input("Status: \n")
        query = ("""UPDATE anime
                    SET status = %s
                    WHERE title = %s""")
        cur.execute(query, (newStatus, self.title))

    def editReleaseDate(self, cur):
        newReleaseDate = input("Release Date: \n")
        query = ("""UPDATE anime
                    SET release_date = %s
                    WHERE title = %s""")
        cur.execute(query, (newReleaseDate, self.title))

    def viewReviews(self, cur):
        query = ("""SELECT * FROM anime_review
                    WHERE title = %s
                    ORDER BY date_written DESC;""")
        cur.execute(query, self.title)

        rows = cur.fetchall()

        for row in rows:
            # Print review
            print(f"{row[3]}")

    def watchCount(self, cur):


    def __str__(self):
        return self.title