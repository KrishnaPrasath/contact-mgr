import React from 'react';
import './header.css';

const Header = () => {
    return(
        <div className="header">
            <div className="brand"><h3>Contact Manager</h3></div>
            <div className="sortBy">SortBy</div>
        </div>
    );
};

export default Header;