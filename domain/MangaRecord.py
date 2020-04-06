class MangaRecord:
    def __init__(self, user, manga, readStatus, userRating, startDate, completionDate, favourite):
        self.user = user
        self.manga = manga
        self.readStatus = readStatus
        self.userRating = userRating
        self.startDate = startDate
        self.completionDate = completionDate
        self.favourite = favourite

    def editReadStatus(self, cur):
        newReadStatus = input("Read status: \n")
        query = ("""UPDATE manga_record
                    SET read_status = %s
                    WHERE user_id = %s
                    AND manga_id = %s""")
        cur.execute(query, (newReadStatus, self.user.userID, self.manga.mangaID))

    def editUserRating(self, cur):
        newUserRating = input("Rating: \n")
        query = ("""UPDATE manga_record
                    SET user_rating = %s
                    WHERE user_id = %s
                    AND manga_id = %s """)
        cur.execute(query, (newUserRating, self.user.userID, self.manga.mangaID))

    def editStartDate(self, cur):
        newStartDate = input("Start date: \n")
        query = ("""UPDATE manga_record
                    SET start_date = %s
                    WHERE user_id = %s
                    AND manga_id = %s""")
        cur.execute(query, (newStartDate, self.user.userID, self.manga.mangaID))

    def editCompletionDate(self, cur):
        newCompletionDate = input("Completion date: \n")
        query = ("""UPDATE manga_record
                    SET completion_date = %s
                    WHERE user_id = %s
                    AND manga_id = %s""")
        cur.execute(query,(newCompletionDate, self.user.userID, self.manga.mangaID))

    def favouriteBool(self, cur):
        isFavourite = input("Favourite?: \n")
        query = ("""UPDATE manga_record
                    SET favourite = %s
                    WHERE user_id = %s
                    AND manga_id = %s""")
        cur.execute(query, (isFavourite, self.user.userID, self.manga.mangaID))