class AnimeReview:
    def __init__(self, user, anime, date, review):
        self.userID = user.userID
        self.animeID = anime.animeID
        self.date = date.today()
        self.review = review

    def editReview(self, cur):
        newReview = input("Review: \n")
        query = ("""UPDATE anime_review
                    SET review = %s
                    WHERE user_id = %s
                    AND anime_id = %s""")
        cur.execute(query, (newReview, self.userID, self.animeID))

