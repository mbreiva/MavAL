
document.getElementById("loginButton").addEventListener("click",loginRequest);

function loginRequest() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let credentials = {username: username, password: password};

    fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    })
    .then(response =>
        response.json()
    )
    .then(result => {
        if(!result.usernameValid){
            alert("Username does not exist.");
        }
        else if(!result.passwordValid){
            alert("Invalid password");
        }
        else{
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            alert("Login success");
        }
        console.log("Success:", result);
    })
        .catch(error => {
            console.error("Error", error);
        });

}


