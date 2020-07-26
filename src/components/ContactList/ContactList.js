import React from 'react';
import { Table } from 'reactstrap';
import Contact from '../Contact/Contact';
import './contactList.css'

import { faEdit, faTrash, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactList = ( props ) => {
    const contacts = props.contacts.filter( contact => {
      return contact.fName.toLowerCase().includes(props.searchString);
    });
    

    return(
        <div className="pt-5">
        <Table className="table table-borderless">
        <thead className="thead">
          <tr>
            <th>+</th>
            <th>Basic Info</th>
            <th>Company</th>
            <th/>
          </tr>
        </thead>
        <tbody>
        { contacts.length !== 0 ? (
          contacts.map( contact=>{
            return (<tr key={contact.id}  onClick={ () => {props.changeViewContact(contact)} } className="tr-highlight">
              <td scope="row" ><input type="checkbox"/></td>
              <td><Contact contact={contact} /></td>
              <td><span>{contact.company}</span></td>
              <td className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={ faCommentAlt } className="m-1 edit" onClick={()=>{props.editContact(contact.id)}} />
                <FontAwesomeIcon icon={faEdit} className="m-1 edit" onClick={()=>{props.editContact(contact.id)}} />
                <FontAwesomeIcon icon={faTrash} className="m-1 delete" onClick={()=>{props.deleteContact(contact.id)}} />
              </td>
            </tr>)
          })) : (<tr><td>No Contacts to display</td></tr>) }          
        </tbody>
      </Table>
      </div>
    );
};

export default ContactList;