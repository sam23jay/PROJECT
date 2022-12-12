import React from "react";
import apple from './apple.png';
import google from './google.png';
import samsung from './samsung.png';
import oneplus from './oneplus.png';
import motorola from './motorola.png';
import nokia from './nokia.png';
import logo from './logo.png';
import {Link} from "react-router-dom";
import './mobile1.css';
function Mobiles(){
    return(
        <>
        <div class="navbar">
            <Link to = "/"><a href="loginpage.html">LOGOUT</a></Link>
            <Link to = "/login"><a href="APPLE/track.html">Track</a></Link>
           <img src={logo} alt="Logo"></img>
        </div>
        <div className="screen1">
            <div className="border1">
                <img src={apple} alt="Apple" />
                 <div className="info">
                 <Link to ="/repair"><button>
                        <p className="fonts1">Get your Iphone repaired</p>
                    </button></Link>
                 </div>
            </div>
        </div>
        <div className="screen2">
            <div className="border1">
                <img src={google} alt="Google" />
                 <div className="info">
                    <button>
                        <p className="fonts1">Get your Pixel phone repaired</p>
                    </button>
                 </div>
            </div>
        </div>
        <div className="screen3">
            <div className="border1">
                <img src={samsung} alt="Samsung" />
                 <div className="info">
                    <button>
                        <p className="fonts1">Get your Samsung Mobile</p>
                        <p className="fonts1">repaired</p>
                    </button>
                 </div>
            </div>
        </div>
        <div className="screen4">
            <div className="border1">
                <img src={oneplus} alt="Oneplus" />
                 <div className="info">
                    <button>
                        <p className="fonts1">Get your Oneplus Mobile</p>
                        <p className="fonts1">repaired</p>
                    </button>
                 </div>
            </div>
        </div>
        <div className="screen5">
            <div className="border1">
                <img src={motorola} alt="Motorola" />
                 <div className="info">
                    <button>
                    <p className="fonts1">Get your Motorola phone</p>
                    <p className="fonts1">repaired</p>
                    </button>
                 </div>
            </div>
        </div>
        <div className="screen6">
            <div className="border1">
                <img src={nokia} alt="Nokia" />
                 <div className="info">
                    <button>
                    <p className="fonts1">Get your Nokia phone repaired</p>
                    </button>
                 </div>
            </div>
        </div>
        </>
    );
    
}

export default Mobiles;