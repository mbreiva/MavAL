
document.getElementById("registerButton").addEventListener("click",registerRequest);

function registerRequest() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let userInfo = {name: name, email: email, username: username, password: password};

    fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
    })
        .then(response =>
            response.json()
        )
        .then(result => {
            if(result.emailExists) {
                alert("This email is tied to an existing account.");
            }
            else if(result.usernameExists) {
                alert("This username is taken.");
            }
            else {
                alert("Register success");
            }
            console.log("Success:", result);
        })
        .catch(error => {
            console.error("Error", error);
        });

}