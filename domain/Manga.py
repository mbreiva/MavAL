class Manga:
    def __init__(self, title, chapterTotal, description, author, artist, rating, status, releaseDate):
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

    def viewReviews(self):
        query = ("""SELECT * from manga_review 
                    WHERE title = %s""")
        cur.execute(query, self.title)

        rows = cur.fetchall()

        for row in rows:
            # Print review
            print(f"{row[3]}")
    def __str__(self):
        return self.title