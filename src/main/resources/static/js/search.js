document.getElementById("animeSearchButton").addEventListener("click", getURLParams);

function getURLParams() {
    let url = window.location.href;
    let search = document.getElementById("animeSearchInput").value;
    let searchTerms = search.replace(" ", "+");
    let url_query = url + "?title=" + searchTerms;
    window.location.replace(url_query);
}



