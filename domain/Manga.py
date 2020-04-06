class Manga:
    def __init__(self, mangaID, title, chapterTotal, description, author, artist, rating, status, releaseDate):
        self.mangaID = mangaID
        self.name = title
        self.chapterTotal = chapterTotal
        self.description = description
        self.author = author
        self.artist = artist
        self.rating = rating
        self.releaseDate = releaseDate

    def updateChapterCount(self, cur):
        newChapterCount = input("Chapters: \n")
        query = ("""UPDATE manga
                    SET chapter_count = %s
                    WHERE title = %s""")
        cur.execute(query, (newChapterCount, self.title))

    def editDescription(self, cur):
        newDescription = input("Description: \n")
        query = ("""UPDATE manga
                    SET description = %s
                    WHERE title = %s""")
        cur.execute(query, (newDescription, self.title))

    def editStatus(self, cur):
        newStatus = input("Status: \n")
        query = ("""UPDATE manga
                    SET status = %s
                    WHERE title = %s""")
        cur.execute(query, (newStatus, self.title))

    def editReleaseDate(self, cur):
        newReleaseDate = input("Release Date: \n")
        query = ("""UPDATE manga
                    SET release_date = %s
                    WHERE title = %s""")
        cur.execute(query, (newReleaseDate, self.title))

    def calculateRating(self, cur):
        query = ("""SELECT rating FROM manga_record
                    WHERE manga_id = %s""")
        cur.execute(query, (self.mangaID,))

        ratingList = cur.fetchall()
        ratingCount = len(ratingList)
        newRating = 0
        for rating in ratingList:
            # str to int conversion?
            newRating += rating

        avgRating = newRating/ratingCount
        return avgRating

    def viewReviews(self, cur):
        query = ("""SELECT * from manga_review 
                    WHERE title = %s
                    ORDER BY date_written DESC;""")
        cur.execute(query, self.title)

        reviews = cur.fetchall()

        for review in reviews:
            # Print review
            print(f"{reviews[3]}")
    def __str__(self):
        return self.title