import React, { useState, useEffect } from 'react';
import './container.css';
import TriComp from '../TriComp/TriComp';
import ContactList from '../ContactList/ContactList';
import DisplayContact from '../DisplayContact/DisplayContact';

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import data from '../../db.json';
import $ from "jquery";

const Container = () => {
    
    const [ open, setOpen ] = useState(false);
    const [ update, setUpdate ] = useState(false);
    const [ contacts, setContacts ] = useState([...data.contacts]);
    const [ viewContact, setViewContact ] = useState(data.contacts[0]);
    const [ count, setCount ] = useState(data.contacts[0].length);
    const [ searchString, setSearchString ] = useState('');
    // useEffect(() => console.log(contacts), [contacts]);

    const  onOpenModal = () => {
        setOpen(true);
    };
    

    const onCloseModal = () => {
        setOpen(false);
    }

    const getRandomColor = () => {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    

    const createNewContact = (e) =>{
      e.preventDefault();
      let name = document.getElementById("fName").value;
      let phone = document.getElementById("phone").value;
      if( name !== '' && phone !== '' )
      {
        let initials = name.match(/\b\w/g) || [];
        initials = (
          (initials.shift() || "") + (initials.pop() || "")
        ).toUpperCase();
        let newContact = {
          fName: document.getElementById("fName").value,
          email: document.getElementById("email").value,
          phone: document.getElementById("phone").value,
          company: document.getElementById("company").value,
          address: document.getElementById("address").value,
          role: document.getElementById("role").value,
          initial: initials,
          color: getRandomColor(),
          id: count,
        };
        setContacts([...contacts, newContact]);
        setCount(count+1);
        onCloseModal();
      }else{
      }
      
    }

    const changeViewContact = (contact) =>{
      setViewContact(contact);
    }

    const editContact = (id) => {
      setUpdate(true);
      let _ = [...contacts];
      _.forEach(c => {
        if(c.id === id){
          setViewContact(c);
        }
      });
    };
    
    const updateContact = (e) => {
      e.preventDefault();
      let name = document.getElementById("uFName").value;
      let initials = name.match(/\b\w/g) || [];
      initials = (
        (initials.shift() || "") + (initials.pop() || "")
      ).toUpperCase();
      let updatedContact = {
        fName: document.getElementById("uFName").value,
        email: document.getElementById("uEmail").value,
        phone: document.getElementById("uPhone").value,
        company: document.getElementById("uCompany").value,
        address: document.getElementById("uAddress").value,
        role: document.getElementById("uRole").value,
        initial: initials,
        color: getRandomColor(),
        id: viewContact.id
      }
      let index;
      let _ = [...contacts]
      _.forEach(c => {
        if(c.id === viewContact.id){
          index = _.indexOf(c);
          _.splice(index,1,updatedContact);
        }
      });
      onCloseUpdateModal();
      setContacts([..._]);
      setViewContact(_[index]);
    }

    const onCloseUpdateModal = () => {
      setUpdate(false);
    }

    const deleteContact = (id) => {
      let _ = [...contacts];
      let index = -1;
      _.forEach(c => {
        if(c.id === id) index = _.indexOf(c);
      });
      if( index !== -1){
        _.splice(index,1);
        setContacts([..._]);
        // if(contacts.length >= 2 && viewContact.id == id ){
        //   console.log("working")
        //   setViewContact(contacts[1]);
        // }
      }
    };

    const searchContact = (e) =>{
      let str = e.target.value;
      let _ = [...contacts];
      if(str.length !== 0){
        _ = contacts.filter( contact => {
          return contact.fName.toLowerCase().includes(str);
        });
      }
      setSearchString(str);
      // setContacts([..._]);
      console.log("search",_);
    };

// Validation
  $(document).ready(function () {
    $(".input").focus(function () {
      $(this).parent().find(".label-txt").addClass("label-active");
    });

    $(".input").focusout(function () {
      if ($(this).prop("required")) {
        if ($(this).val() === "") {
          $(this).parent().find(".label-txt").removeClass("label-active");
          $(this).parent().find(".line-box").addClass("line-red");
        } else {
          $(this).parent().find(".line-box").removeClass("line-red");
        }
      } else {
        if ($(this).val() === "") {
          $(this).parent().find(".label-txt").removeClass("label-active");
        }
      }
    });
  });


    return(
    <div className="container content-wrapper">
      <div className="nav-wrapper">
        <TriComp/>
      </div>
      <div className=" d-flex flex-direction-column p-3 column-wrapper">
        <div className="left-column p-5">
            {/* TODO Search bar and add contact button */}
            <div className=" operations d-flex justify-content-around">
              <div className="search-bar d-flex justify-content-between align-items-center">
                <input
                  id="mainSearch"
                  type="text"
                  className="no-outline"
                  placeholder="Search contacts"
                  onChange={ searchContact }
                />
                <span>
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </div>
              <div>
              <button id="addContact" className="btn btn-customize" onClick={onOpenModal}>+ Add Contact</button>
              </div>
            </div>
            {/* TODO contact list */}
            
            <ContactList contacts = { contacts } changeViewContact={changeViewContact} editContact = {editContact} deleteContact = {deleteContact}  searchString = { searchString } />
             
            <Modal
                open={open}
                onClose={onCloseModal}
                center={true}
                showCloseIcon
              >
              <div className="container p-5">
                  <h3 className="text-muted text-center">Create New Contact</h3>
                  <form className="form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="flabel">
                            <p className="label-txt">FullName* :</p>
                            <input
                              type="text"
                              className="input"
                              id="fName"
                              required
                            />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="flabel">
                            <p className="label-txt">Email :</p>
                            <input type="text" className="input" id="email" />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </label >
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="flabel"> 
                            <p className="label-txt">Phone* :</p>
                            <input
                              type="text"
                              className="input"
                              id="phone"
                              required
                            />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="flabel">
                            <p className="label-txt">Company :</p>
                            <input type="text" className="input" id="company" />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="flabel">
                            <p className="label-txt">Address :</p>
                            <input type="text" className="input" id="address" />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="flabel">
                            <p className="label-txt">Role :</p>
                            <input type="text" className="input" id="role" />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        id="createContact"
                        className="btn btn-customize"
                        onClick={createNewContact}
                      >
                        Create
                      </button>
                    </div>
                  </form>
                </div>
                </Modal>
                {/* UpdateOpen Modal */}
                <Modal
                open={update}
                onClose={onCloseUpdateModal}
                center={true}
                showCloseIcon
              >
              <div className="container p-5">
                  <h3 className="text-muted text-center">Edit Contact</h3>
                  <form className="form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="flabel">
                            <p className="label-txt">Full Name* :</p>
                            <input
                              type="text"
                              className="input"
                              id="uFName"
                              defaultValue={ viewContact.fName }
                              required

                            />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="flabel">
                            <p className="label-txt">Email :</p>
                            <input type="text" className="input" id="uEmail" 
                            defaultValue={ viewContact.email }
                            />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="flabel">
                            <p className="label-txt">Phone* :</p>
                            <input
                              type="text"
                              className="input"
                              id="uPhone"
                              defaultValue={ viewContact.phone }
                              required
                            />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="flabel">
                            <p className="label-txt">Company :</p>
                            <input type="text" className="input" id="uCompany" 
                            defaultValue={ viewContact.company }
                            />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="flabel">
                            <p className="label-txt">Address :</p>
                            <input type="text" className="input" id="uAddress" 
                            defaultValue={ viewContact.address }
                             />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="flabel">
                            <p className="label-txt">Role :</p>
                            <input type="text" className="input" id="uRole"
                             defaultValue={ viewContact.role }
                            />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        id="createContact"
                        className="btn btn-customize"
                        onClick={updateContact}
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
                </Modal>
                {/* End of Update open modal */}
        </div>

        <div className="right-column p-5">
            {/* TODO contact display */}
            <DisplayContact viewContact={ viewContact }/>
        </div>
      </div>
    </div>
    );
};

export default Container;