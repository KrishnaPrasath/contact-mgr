import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './operations.css';

const Opertations = () => {
    return(
    <div className="operations d-flex justify-content-around pl-5">
        <div className="search-bar d-flex justify-content-between align-items-center">
            <input
                type="text"
                className="no-outline"
                placeholder="Search contacts"
            />
            <span>
                <FontAwesomeIcon icon={faSearch} />
            </span>
        </div>
        <button className="btn btn-customize">+ Add Contact</button>
    </div>
    );
}