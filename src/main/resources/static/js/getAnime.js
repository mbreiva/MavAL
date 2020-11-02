
animeRequest();

function animeRequest(){

    fetch("http://localhost:8080/api/getAnimeDefault", {
        method: "GET",
    })
        .then(response =>
            response.json()
        )
        .then(result => {
            addAnimeToTable(result);
            console.log("Success:", result);
        })
        .catch(error => {
            console.error("Error", error);
        });
}

function addAnimeToTable(animeList) {
    let animeTable = document.getElementById("animeTable");

    if(animeList.size() == 0){
        let row = animeTable.insertRow;
        let col = row.insertCell(0);
        col.innerHTML = "No anime available";
    }
    else{
        for(i=0; i < animeList.size(); i++) {
            let row = animeTable.insertRow(i);
            let title = row.insertCell(0);
            let status = row.insertCell(1);
            let episodeCount = row.insertCell(2);

            title.innerHTML = animeList.get(i).getTitle();
            status.innerHTML = animeList.get(i).getStatus();
            episodeCount.innerHTML = animeList.get(i).getEpisodeCount();
        }
    }
}