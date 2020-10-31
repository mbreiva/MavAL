
document.getElementById("loginButton").addEventListener("click",loginRequest);

function loginRequest() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let credentials = {username: username, password: password};

    fetch("/api/authenticate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    })
    .then(response => {
        return response.json();
    })
    .then(result => {
        console.log("Success:", result);
    })
        .catch(error => {
            console.error("Error", error);
        });

}


