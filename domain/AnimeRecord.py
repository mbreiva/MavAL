class AnimeRecord:
    def __init__(self, user, anime, watchStatus, userRating, startDate, completionDate, favourite):
        self.user = user
        self.anime = anime
        self.watchStatus = watchStatus
        self.userRating = userRating
        self.startDate = startDate
        self.completionDate = completionDate
        self.favourite = favourite

    # destructor?

    # Edit to make user choose between 4 options: Currently watching, On Hold, Dropped, Plan to Watch
    def editWatchStatus(self, cur):
        newWatchStatus = input("Watch status: \n")

    def editUserRating(self, cur):
        newUserRating = input("Rating: \n")
        query = ("""UPDATE anime_record
                    SET user_rating = %s
                    WHERE user_id = %s
                    AND title = %s""")
        cur.execute(query, (newUserRating, self.user.userID, self.anime.title))

    def editStartDate(self, cur):
        newStartDate = input("Start date: \n")
        query = ("""UPDATE anime_record
                    SET start_date = %s
                    WHERE user_id = %s
                    AND title = %s""")
        cur.execute(query, (newStartDate, self.user.userID, self.anime.title))