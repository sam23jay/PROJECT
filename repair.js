import React from "react";
import support from './support.png';
import './repair.css';
function Repair(){
    return (
        <div className="b">
            <img className="imgs" src={support} alt="Support" />
            <div className="txt2">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <form>
                <input class = "input-field2" type = "text" placeholder="SERIAL NUMBER" maxlength = "12" required />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <input class="requestbutton" type = "submit" value="START A REPAIR REQUEST" />
                <br></br><br></br>
               </form>
            </div>
        </div>
    );
}

export default Repair;