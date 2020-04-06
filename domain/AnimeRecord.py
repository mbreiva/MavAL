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
        query = ("""UPDATE anime_record
                    SET watch_status = %s
                    WHERE user_id = %s
                    AND anime_id = %s""")
        cur.execute(query, (newWatchStatus, self.user.userID, self.anime.animeID))

    def editUserRating(self, cur):
        newUserRating = input("Rating: \n")
        query = ("""UPDATE anime_record
                    SET user_rating = %s
                    WHERE user_id = %s
                    AND anime_id = %s""")
        cur.execute(query, (newUserRating, self.user.userID, self.anime.animeID))

    def editStartDate(self, cur):
        newStartDate = input("Start date: \n")
        query = ("""UPDATE anime_record
                    SET start_date = %s
                    WHERE user_id = %s
                    AND anime_id = %s""")
        cur.execute(query, (newStartDate, self.user.userID, self.anime.animeID))

    def editCompletionDate(self, cur):
        newCompletionDate = input("Completion date: \n")
        query = ("""UPDATE anime_record
                    SET completion_date = %s
                    WHERE user_id = %s
                    AND anime_id = %s""")
        cur.execute(query,(newCompletionDate, self.user.userID, self.anime.animeID))

    def favouriteBool(self, cur):
        isFavourite = input("Favourite?: \n")
        query = ("""UPDATE anime_record
                    SET favourite = %s
                    WHERE user_id = %s
                    AND anime_id = %s""")
        cur.execute(query, (isFavourite, self.user.userID, self.anime.animeID))