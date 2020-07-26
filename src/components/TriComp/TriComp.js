import React from 'react';
import './triComp.css';
// get our fontAwesome imports
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const TriComp = () => {
    return(
        <div className="main-wrapper">
            <div className="contact-wrapper d-flex justify-content-center">
                <div id="logo p-2">
                    <FontAwesomeIcon className="icon" icon={ faAddressBook }/>
                </div>
                <div id="content-wrapper">
                    <div className="top m-1">
                        <h3 className='strong'>Contacts</h3>
                    </div>
                    <div className="bottom m-1">
                        <p className='strong'>Welcome to our contact page!</p>
                    </div>
                </div>
            </div>
            <div className="sort-wrapper d-flex justify-content-center flex-direction-row align-items-center">
                <p className="items" style={{margin: '0 auto'}}>SortBy:</p>
                <UncontrolledDropdown className="m-2" setActiveFromChild>
                    <DropdownToggle tag="a" className="nav-link" caret>
                        Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem tag="a" href="/blah" active>Link</DropdownItem>
                    </DropdownMenu>
              </UncontrolledDropdown>
            </div>
        </div>
    );
};

export default TriComp;