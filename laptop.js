import React from "react";
import apple from './apple.png';
import dell from './dell.png';
import asus from './asus.png';
import lenovo from './lenovo.png';
import hp from './hp.png';
import acer from './acer.png';
import logo from './logo.png';
import './mobile1.css';
import './navbar.css';
import {Link} from "react-router-dom";

function Lapop(){
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
                    <button>
                        <p className="fonts1">Get your MacBooks repaired</p>
                    </button>
                 </div>
            </div>
        </div>
        <div className="screen2">
            <div className="border1">
                <img src={dell} alt="Dell" />
                 <div className="info">
                    <button>
                        <p className="fonts1">Expert Repairs for Your PC</p>
                    </button>
                 </div>
            </div>
        </div>
        <div className="screen3">
            <div className="border1">
                <img src={asus} alt="Asus" />
                 <div className="info">
                    <button>
                        <p className="fonts1">Search for a Solution</p>
                    </button>
                 </div>
            </div>
        </div>
        <div className="screen4">
            <div className="border1">
                <img src={lenovo} alt="Lenovo" />
                 <div className="info">
                    <button>
                    <p className="fonts1">Welcome to Lenovo Customer</p>
                    <p className="fonts1">Support.</p>
                    </button>
                 </div>
            </div>
        </div>
        <div className="screen5">
            <div className="border1">
                <img src={hp} alt="Hp" />
                 <div className="info">
                    <button>
                    <p className="fonts1">Welcome to HP Customer</p>
                    <p className="fonts1">Support.</p>
                    </button>
                 </div>
            </div>
        </div>
        <div className="screen6">
            <div className="border1">
                <img src={acer} alt="Acer" />
                 <div className="info">
                    <button>
                    <p className="fonts1">Welcome to Acer Customer </p>
                    <p className="fonts1">Support.</p>
                    </button>
                 </div>
            </div>
        </div>
        </>
    );
    
}

export default Lapop;