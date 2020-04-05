class User:
    # Constructor - initializes new user object
    def __init__(self, userID, username, firstName, lastName, password, email):
        self.userID = userID
        self.username = username
        self.firstName = firstName
        self.lastName = lastName
        self.password = password
        self.email = email

    animeList = []  # fill this with AnimeRecords
    mangaList = []  # fill this with MangaRecords

    favAnime = []
    currentlyWatching = []
    droppedAnime = []
    onHoldAnime = []
    planToWatch = []
    favManga = []
    currentlyReading = []
    droppedManga = []
    onHoldAnime = []
    planToRead = []

    def changeUsername(self, oldUsername):
        newUsername = input("Please enter new username: \n")
        # Check to see if username already exists in the database

    def changePassword(self, oldPassword):
        # Password requirements?
        newPassword = input("Please enter new password: \n")
        # Check that new password is not the same as old password
        # while loop vs recursion?

    def changeEmail(self, oldEmail):
        newEmail = input("Please enter new email address: \n")

    def writeReview(self):

    def addAnimeRecord(self, title):
    # Check to see if anime exists in database
    # If not in database, call insertAnime()

    def editAnimeRecord(self, title):
    # Check to see if animeRecord exists
    # SELECT * from anime_record WHERE user_id = userID AND title = title
    # If not -> error -> addAnimeRecord()

    def addMangaRecord(self, title):

    def editAnimeRecord(self):

    def viewAnimeList(self):
    # SELECT * from anime_record WHERE user_id = userID

    def viewFavourtiteAnime(self):
    # SELECT * from anime_record WHERE user_id = userID AND favourite = true

    def viewCurrentlyWatchingAnime(self):

    def viewDroppedAnime(self):

    def viewOnHoldAnime(self):

    def viewPlanToWatchAnime(self):

    def viewMangaList(self):

    def viewFavourtiteManga(self):

    def viewCurrentlyWatchingManga(self):

    def viewDroppedManga(self):

    def viewOnHoldManga(self):

    def viewPlanToWatchManga(self):

    def listTotal(self, list):
        return len(list)
  #  def __str__(self):
