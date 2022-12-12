import React from 'react';
import logo from './logo.png';
import playstation from './playstation.png';
import xbox from './xbox.png';
import nintendo from './nintendo.png';
import './console.css';
import './navbar.css';
import {Link} from "react-router-dom";
function Console(){
    return(
        <>
         <div class="navbar">
            <Link to = "/"><a href="loginpage.html">LOGOUT</a></Link>
            <Link to = "/login"><a href="APPLE/track.html">Track</a></Link>
           <img src={logo} alt="Logo"></img>
        </div>
        <div className="screen1">
            <div className="border1">
                <img src={nintendo} alt="Nintendo" />
                 <div className="info">
                    <button>
                        <p className="fonts2">Get your Nintendo Console</p>
                        <p className='fonts2'>Repaired</p>
                    </button>
                 </div>
            </div>
        </div>
        <div className="screen2">
            <div className="border1">
                <img src={xbox} alt="Xbox" />
                 <div className="info">
                    <button>
                        <p className="fonts2">Get your Xbox Console</p>
                        <p className='fonts2'>Repaired</p>
                    </button>
                 </div>
            </div>
        </div>
        <div className="screen3">
            <div className="border1">
                <img src={playstation} alt="Playstation" />
                 <div className="info">
                    <button>
                        <p className="fonts2">Get your Playstation Console</p>
                        <p className="fonts2">repaired</p>
                    </button>
                 </div>
            </div>
        </div>
        </>
    );
}

export default Console;