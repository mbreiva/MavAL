class MangaReview:
    def __init__(self, user, manga, date, review):
        self.userID = user.userID
        self.mangaID = manga.mangaID
        self.dateWritten = date.today()
        self.review = review

    def editReview(self, cur):
        newReview = input("Review: \n")
        query = ("""UPDATE manga_review
                    SET review = %s
                    WHERE user_id = %s
                    AND manga_id = %s""")
        cur.execute(query, (newReview, self.userID, self.mangaID))
