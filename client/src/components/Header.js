import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <div className = "ui pointing menu" >
            <NavLink exact to="/" className="item">Home</NavLink>
            <NavLink exact to="/gallery" className="item">Gallery</NavLink>
            <NavLink exact to="/createCar" className="item">Add Car</NavLink>
            <NavLink to="/searchCar" className="right menu">
                < div className = "item" >
                    < div className = "ui transparent icon input" >
                        <input type="text" placeholder="Search..." />
                        < i className = "search link icon" > </i>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default Header;