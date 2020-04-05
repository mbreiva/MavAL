class MangaRecord:
    def __init__(self, user, manga, readStatus, userRating, startDate, completionDate, favourite):
        self.user = user
        self.manga = manga
        self.readStatus = readStatus
        self.userRating = userRating
        self.startDate = startDate
        self.completionDate = completionDate
        self.favourite = favourite

    def editUserRating(self, cur):
        newUserRating = input("Rating: \n")
        query = ("""UPDATE manga_record
                    SET user_rating = %s
                    WHERE user_id = %s
                    AND title = %s """)
        cur.execute(query, (newUserRating, self.user.userID, self.manga.title))

    def editStartDate(self, cur):
        newStartDate = input("Start date: \n")
        query = ("""UPDATE manga_record
                    SET start_date = %s
                    WHERE user_id = %s
                    AND title = %s""")
        cur.execute(query, (newStartDate, self.user.userID, self.anime.title))