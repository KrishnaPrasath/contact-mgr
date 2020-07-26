import React from 'react';
import './sideBar.css';

import { faHome, faHamburger, faClock, faDatabase, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SideBar = () => {

    const toggleSideBar = () => {
        console.log(document.getElementById("sideBar"));
        document.getElementById("sideBar").classList.toggle('active');
    }

    return(
        <div id="sideBar" onClick={ toggleSideBar }>
            <div className="toggleButton" >

            </div>
            <ul>
                <li><FontAwesomeIcon icon={ faHamburger }/></li>
                <li><FontAwesomeIcon icon={faHome}/></li>
                <li><FontAwesomeIcon icon={ faUser }/></li>
                <li><FontAwesomeIcon icon={ faClock }/></li>
                <li><FontAwesomeIcon icon={ faDatabase }/></li>
            </ul>
        </div>
    );
};

export default SideBar;