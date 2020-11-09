import React from 'react'

export default function LoginPage(){
    return (
        <div class="m-5">
            <h1>Login</h1>
            <div>
                <div class="form-group">
                    <label for="username"><b>Username </b></label>
                    <input type="text" class="form-control" name="username" id="username" placeholder="Enter Username" required />
                </div>
                <div class="form-group">
                    <label for="password"><b>Password </b></label>
                    <input type="text" class="form-control" name="password" id="password" placeholder="Enter Password" required/>
                </div>
                <div class="form-group form-check">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input"/> Remember me
                    </label>
                </div>
                <button id="loginButton" name="loginButton" class="btn btn-outline-success">Login</button>
            </div>
        </div>
    )
}