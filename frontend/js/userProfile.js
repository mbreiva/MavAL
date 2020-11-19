
profileRequest();

function profileRequest() {
    let url = "http://localhost:8080/api/get_profile";
    let username = localStorage.getItem("username");

    if(username == null){
        window.location.replace("http://localhost:8000/login");
    }

    else {
        url = url + "?username=" + username;

        fetch(url, {
            method: "GET",
        })
            .then(response => response.json())
            .then(result => {
                fillProfile(result);
                console.log("Success:", result);
            })
            .catch(error => {
                console.error("Error", error);
            });
    }
}

function fillProfile(user) {
    let username = document.getElementById("username");

    username.innerHTML = user.username;
}

