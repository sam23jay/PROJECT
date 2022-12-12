import React from "react";
import './signup.css';
import {Link} from "react-router-dom";
function Register(){
    return (
    <>
    <div className="body">

    </div>
    <h1 Class = "fonts">Welcome</h1>
    <h2 class="fonts">We're Excited to have you</h2>
    <h2 class="fonts">here!</h2>
    <form>

        <div class = "postion">
            
            <br />
            
            <label class = "leftFont">Full Name :</label>
            <div class = "Fonts">
                <br></br>
                <input class="input-field" type = "text" placeholder="Your name" required></input>
            </div>
            <br />
            <label class = "leftFont">Phone Number :</label>
            <div class = "Fonts">
                <br></br>
                <input class="input-field" type = "text" placeholder="Your Phone Number" required></input>
            </div>
            <br />
            <label class = "leftFont">State :</label>
            <div class = "Fonts">
                <br />
                <input class="input-field" type = "text" placeholder="Your State" required />
            </div>
            <br />
            <label class = "leftFont">Pin Code :</label>
            <div class = "Fonts">
                <br />
                <input class="input-field" type = "text" placeholder="Your postal code" required />
            </div>
            <br />
            <label class = "leftFont">Email ID :</label>
            <div class = "Fonts">
                <br />
                <input class = "input-field" type = "email" placeholder="Your mail" required />
            </div>
            <br />
            <div class ="signin">
                <label>Have an account?
                    <Link to ="/"><a class = "visited" href="login.js">Login Instead</a></Link>
                </label>
            </div>
        </div>
        <div class = "left">
            
            <label class = "leftFont">User Name :</label>
            <div class = "Fonts">
                <br />
                <input class = "input-field-left" type = "text" placeholder="UserName" required />
            </div>
            <br />
            <label class = "leftFont">Password :</label>
            <div class = "Fonts">
                <br />
                <input class = "input-field-left" type = "password" placeholder="Password" required />
            </div>
            <br />
            <br />
            <Link to ="/"><input  class = "button" type = "submit" value = "SIGN UP!" /></Link>
        </div>
    </form>
    </>
    );
}
export default Register;