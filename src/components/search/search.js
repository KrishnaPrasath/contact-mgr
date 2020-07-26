import React from 'react';
import './search.css';

const Search = () => {
    return(
        <div>
        <input type="text" name="name" className="question" id="nme" required autoComplete="off" />
        <label htmlFor="nme"><span>Search..</span></label>
        <textarea name="message" rows="2" className="question" id="msg" required autoComplete="off"></textarea>
        </div>
    );
};

export default Search;