class User:
    # Constructor - initializes new user object
    def __init__(self, username, firstName, lastName, password, email):
        self.username = username
        self.firstName = firstName
        self.lastName = lastName
        self.password = password
        self.email = email

    animeList = []  # fill this with AnimeRecords
    mangaList = []  # fill this with MangaRecords

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

    def viewAnimeList(self):

    def viewMangaList(self):


  #  def __str__(self):
