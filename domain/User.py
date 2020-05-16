class User:
    # Constructor - initializes new user object
    def __init__(self, userID, username, firstName, lastName, password, email):
        self.userID = userID
        self.username = username
        self.firstName = firstName
        self.lastName = lastName
        self.password = password
        self.email = email

    favManga = []
    currentlyReading = []
    droppedManga = []
    onHoldAnime = []
    planToRead = []

    # EDIT USER PROPERTIES

    def changeUsername(self, cur):
        newUsername = input("Please enter new username: \n")
        # Check to see if username already exists in the database

        query = ("""UPDATE maval_user
                    SET username = %s
                    WHERE user_id = %s""")
        cur.execute(query, (newUsername, self.userID))

    def changePassword(self, cur):
        # Password requirements?
        newPassword = input("Please enter new password: \n")
        # Check that new password is not the same as old password
        # while loop vs recursion?

        query = ("""UPDATE maval_user
                    SET password = %s
                    WHERE user_id = %s""")
        cur.execute(query, (newPassword, self.userID))

    def changeEmail(self, cur):
        newEmail = input("Please enter new email address: \n")
        # Check to see if email is valid

        query = ("""UPDATE maval_user
                    SET email = %s
                    WHERE user_id = %s""")
        cur.execute(query,(newEmail,self.userID))

    #def writeReview(self):

    #def addAnimeRecord(self, title):
    # Check to see if anime exists in database
    # If not in database, call insertAnime()

   # def editAnimeRecord(self, title):
    # Check to see if animeRecord exists
    # SELECT * from anime_record WHERE user_id = userID AND title = title
    # If not -> error -> addAnimeRecord()

   # def addMangaRecord(self, title):

    #def editAnimeRecord(self):


    # VIEW LISTS
    def listAllUserMedia(self,cur):
        query = ("""SELECT * FROM user_record 
                    WHERE user_id = %s
                    ORDER BY title ASC;""")
        cur.execute(query,(self.userID,))

        userMedia = cur.fetchall()

        return userMedia

    def viewAnimeList(self, cur):
        userMedia = self.listAllUserMedia(cur)

        for media in userMedia:

        query = ("""SELECT * FROM user_record 
                    WHERE user_id = %s
                    ORDER BY title ASC;""")
        cur.execute(query,(self.userID,))

        animeList = cur.fetchall()

    def viewFavourtiteAnime(self, cur):
        query = ("""SELECT * FROM anime_record 
                    WHERE user_id = %s 
                    AND favourite = %s
                    ORDER BY title ASC;""")
        cur.execute(query,(self.userID,"true"))

        favAnime = cur.fetchall()

    def viewCurrentlyWatchingAnime(self, cur):
        query = ("""SELECT * FROM anime_record 
                    WHERE user_id = %s 
                    AND watch_status = %s
                    ORDER BY title ASC;""")
        cur.execute(query,(self.userID,"Currently watching"))

        curWatchingAnime = cur.fetchall()

    def viewCompletedAnime(self, cur):
        query = ("""SELECT * FROM anime_record 
                    WHERE user_id = %s 
                    AND watch_status = %s
                    ORDER BY title ASC;""")
        cur.execute(query,(self.userID,"Completed"))

        completedAnime = cur.fetchall()

    def viewDroppedAnime(self, cur):
        query = ("""SELECT * FROM anime_record 
                    WHERE user_id = %s 
                    AND watch_status = %s
                    ORDER BY title ASC;""")
        cur.execute(query,(self.userID,"Dropped"))

        droppedAnime = cur.fetchall()

    def viewOnHoldAnime(self, cur):
        query = ("""SELECT * FROM anime_record 
                    WHERE user_id = %s 
                    AND watch_status = %s
                    ORDER BY title ASC;""")
        cur.execute(query,(self.userID,"On hold"))

        onHoldAnime = cur.fetchall()

    def viewPlanToWatchAnime(self, cur):
        query = ("""SELECT * FROM anime_record 
                    WHERE user_id = %s 
                    AND watch_status = %s
                    ORDER BY title ASC;""")
        cur.execute(query,(self.userID,"Plan to watch"))

        planToWatchAnime = cur.fetchall()

    def viewMangaList(self, cur):
        query = ("""SELECT * FROM manga_record 
                    WHERE user_id = %s
                    ORDER BY title ASC;""")
        cur.execute(query, (self.userID,))

        mangaList = cur.fetchall()

    def viewFavourtiteManga(self, cur):
        query = ("""SELECT * FROM manga_record 
                    WHERE user_id = %s 
                    AND favourite = %s
                    ORDER BY title ASC;""")
        cur.execute(query, (self.userID, "true"))

        favManga = cur.fetchall()

    def viewCurrentlyReadingManga(self, cur):
        query = ("""SELECT * FROM manga_record 
                    WHERE user_id = %s 
                    AND read_status = %s
                    ORDER BY title ASC;""")
        cur.execute(query,(self.userID,"Currently reading"))

        curReadingManga = cur.fetchall()

    def viewCompletedManga(self, cur):
        query = ("""SELECT * FROM manga_record 
                    WHERE user_id = %s 
                    AND read_status = %s
                    ORDER BY title ASC;""")
        cur.execute(query, (self.userID, "Completed"))

        completedManga = cur.fetchall()

    def viewDroppedManga(self, cur):
        query = ("""SELECT * FROM manga_record 
                    WHERE user_id = %s 
                    AND read_status = %s
                    ORDER BY title ASC;""")
        cur.execute(query,(self.userID,"Dropped"))

        droppedManga = cur.fetchall()

    def viewOnHoldManga(self, cur):
        query = ("""SELECT * FROM manga_record 
                    WHERE user_id = %s 
                    AND read_status = %s
                    ORDER BY title ASC;""")
        cur.execute(query,(self.userID,"On hold"))

        onHoldManga = cur.fetchall()

    def viewPlanToReadManga(self, cur):
        query = ("""SELECT * FROM manga_record 
                    WHERE user_id = %s 
                    AND read_status = %s
                    ORDER BY title ASC;""")
        cur.execute(query,(self.userID,"Plan to read"))

        planToReadManga = cur.fetchall()

    def listTotal(self, list):
        return len(list)
  #  def __str__(self):
