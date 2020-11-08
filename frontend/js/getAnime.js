
animeRequest();

function animeRequest(){
    let url = "http://localhost:8080/api/get_anime?limit=20";

    fetch(url, {
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

    if(animeList.length == 0){
        let row = animeTable.insertRow(0);
        let col = row.insertCell(0);
        col.innerHTML = "No anime available";
    }
    else{
        for(i=0; i < animeList.length; i++) {
            let row = animeTable.insertRow(i+1);
            let title = row.insertCell(0);
            let status = row.insertCell(1);
            let episodeCount = row.insertCell(2);

            title.innerHTML = animeList[i].title;
            status.innerHTML = animeList[i].status;
            episodeCount.innerHTML = animeList[i].episodeCount;
        }
    }
}