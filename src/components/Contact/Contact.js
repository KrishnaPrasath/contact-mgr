import React from 'react';
import './contact.css';

import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = ( props ) => {
    // props.contact
    return(
        <div className="d-flex justify-content-evenly">
            <div className="d-flex align-items-center m-2">
                {/* <FontAwesomeIcon icon={ faAddressBook }/> */}
                <span className="initial" style={{backgroundColor : props.contact.color}}><h5>{props.contact.initial}</h5></span>
            </div>
            <div >
                <div className="">
                    <h5 className='strong'>{props.contact.fName}</h5>
                </div>
                <div className="bottom">
                    <p>{props.contact.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;