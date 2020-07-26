import React from 'react';
import './displayContact.css';

const DisplayContact = ( props ) =>{
    return(
        <div className="initial mt-5 card shadow p-5 display">
            <div id="badge" className="d-flex justify-content-center align-items-center" style={{ backgroundColor: props.viewContact.color }}>
                <h3>{props.viewContact.initial}</h3>
            </div>  
            <div id="name" className="m-2">
                <h3>{props.viewContact.fName}</h3>
            </div>
            <div id="role" className="m-1">
                <h6>{props.viewContact.role}</h6>
            </div>
            <div className="mt-5">
                <form>
                    <div className="form-group row">
                        <label htmlFor="fullName" className="col-sm-4 col-form-label">FullName</label>
                        <div className="col-sm-8">
                        <input type="text" readOnly className="form-control-plaintext" id="fullName" value={props.viewContact.fName}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Email</label>
                        <div className="col-sm-8">
                        <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={props.viewContact.email}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phone" className="col-sm-4 col-form-label">Phone</label>
                        <div className="col-sm-8">
                        <input type="text" readOnly className="form-control-plaintext" id="phone" value={props.viewContact.phone}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="company" className="col-sm-4 col-form-label">Company</label>
                        <div className="col-sm-8">
                        <input type="text" readOnly className="form-control-plaintext" id="company" value={props.viewContact.company}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="address" className="col-sm-4 col-form-label">Address</label>
                        <div className="col-sm-8">
                        <input type="text" readOnly className="form-control-plaintext" id="address" value={props.viewContact.address}/>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default DisplayContact;