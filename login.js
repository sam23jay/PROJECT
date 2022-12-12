import React from "react";
import './login.css';
import {FaUser, FaLock} from 'react-icons/fa'
import {Link} from "react-router-dom";
function Page(){

        return(

        <div className="back">
            <h1>Login</h1>
            <form>
                <div className="input">
                    <div className="input-container">
                        <input className="input-field" type = "text"  placeholder="UserName" required/>
                        <FaUser />
                    </div>
                    <div className="input-container">
                        <input className="input-field" type = "password"  placeholder="Password" required/>
                        <FaLock />
                    </div>
                    <br></br>
                    <div class = "linkpos">
                        <a className="visited" href="www.goole.com">forgot password?</a>
                    </div>
                    <br></br>
                    <br></br>
                    <Link to="/home"><input className = "signbutton" type= "submit" value="Sign In" /></Link>
                    <br></br>
                    <br></br>
                    <div class ="signup">
                    <Link to="/signup"><a class = "visited" href="www.goole.com">new? Sign up instead</a></Link>
                    </div>
                </div>
            </form>
           
        </div>

);
}
export default Page;

