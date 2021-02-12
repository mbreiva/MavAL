import json

season_map = {
    "SPRING": "04",
    "SUMMER": "07",
    "FALL": "10",
    "WINTER": "01",
}

with open('./anime.json') as data_f, open("anime.csv", "w") as output_f:
    # load the json data as a dictionary
    data = json.load(data_f)["data"]
    data_f.close()

    # write csv headers to output
    output_f.write("media_type_id, title, status, release_date, episode_count\n")

    seen_titles = {}

    for anime in data:
        # print(f"anime : {anime['title']}")
        title = anime["title"].replace('"', '""')

        if (title in seen_titles):
            # already seen this, skip
            continue

        seen_titles[title] = ""

        status = anime["status"]

        release_date = "NULL"
        # try to parse season from data
        season_data = anime["animeSeason"]
        if season_data:
            release_year = "2000"
            release_month = "01"
            # use first date for now
            release_day = "01"

            if season_data["year"]:
                release_year = f"{season_data['year']}"

            if season_data["season"] != "UNDEFINED":
                release_month = season_map.get(season_data["season"])

            release_date = f"{release_year}-{release_month}-{release_day}"

        episodes = anime['episodes']
        output_f.write(f'"1","{title}","{status}","{release_date}","{episodes}"\n')

    output_f.close()
    print(f"anime size {len(seen_titles)}")
