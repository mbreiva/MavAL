import requests
import json

output = open("manga.csv", "w", encoding="utf-8")
output.write("media_type_id, title, status, release_date, chapter_count, image_source\n")
data = []

# Get manga data from Kitsu API
for page in range(10):
    response = requests.get(f"https://kitsu.io/api/edge/manga?page[limit]=20&&page[offset]={page*20}")
    
    for item in response.json()["data"]:
        data.append(item)
   

for manga in data:
    title = manga["attributes"]["canonicalTitle"]
    status = manga["attributes"]["status"].capitalize()
    release_date = manga["attributes"]["startDate"]
    chapter_count = manga["attributes"]["chapterCount"]
    image_source = manga["attributes"]["posterImage"]["large"]

    if status is None:
        status = "Unknown"
    elif status.lower() == "current":
        status = "Ongoing"
    elif status.lower() == "tba":
        status = "TBA"
    if release_date is None:
        release_date = ""
    if chapter_count is None:
        chapter_count = 0
    if image_source is None:
        image_source = ""
    
    
    output.write(f'"2","{title}","{status}","{release_date}","{chapter_count}","{image_source}"\n')

output.close()