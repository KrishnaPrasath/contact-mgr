import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavItem, Collapse, NavbarText,
   UncontrolledDropdown, DropdownToggle
  ,DropdownMenu, DropdownItem } from  'reactstrap';
import './navBar.css';

import { faEnvelope, faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOnClickSearch = () => {
      let element = document.getElementById('mainSearch');
      element.focus();
    };

    const handleOnClickAdd = () =>{
      let element = document.getElementById('addContact');
      element.click();
    }

    return(
    <div>
      <Navbar color="light" light expand="md" id="nav" className="shadow">
        <NavbarBrand className="items searchIcon" href="#"><FontAwesomeIcon className="m-2" icon={ faSearch } onClick={ handleOnClickSearch } /></NavbarBrand>
        <Collapse isOpen={isOpen} navbar className=" d-flex justify-content-end">
              <NavbarText className="items m-2" role="button" onClick={ handleOnClickAdd }>+Add</NavbarText>
              <FontAwesomeIcon className="m-2" icon={ faEnvelope }/>
              <UncontrolledDropdown className="m-2" setActiveFromChild>
                <DropdownToggle tag="a" className="nav-link" caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a" href="/blah" active>Link</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <FontAwesomeIcon icon={ faBell } className="m-2"/>
        </Collapse>
        
      </Navbar>
    </div>
    );
};

export default NavBar;