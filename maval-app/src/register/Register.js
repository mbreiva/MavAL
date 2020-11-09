import React from 'react'

export default function RegisterPage(){
    return (
        <div class="m-5">
            <h1>User Registration</h1>
            <div>
                <div class="form-group">
                    <label for="name"><b>Name</b></label>
                    <input type="text" class="form-control" name="name" id="name" placeholder="Enter name" required />
                </div>
                <div class="form-group">
                    <label for="email"><b>Email</b></label>
                    <input type="text" class="form-control" name="email" id="email" placeholder="Enter email" required />
                </div>
                <div class="form-group">
                    <label for="username"><b>Username</b></label>
                    <input type="text" class="form-control"  name="username" id="username" placeholder="Enter Username" required />
                </div>
                <div class="form-group">
                    <label for="password"><b>Password</b></label>
                    <input type="text" class="form-control" name="password" id="password" placeholder="Enter Password" required />
                </div>
                <button id="registerButton" name="registerButton" class="btn btn-outline-success">Register</button>
            </div>
        </div>
    )
}