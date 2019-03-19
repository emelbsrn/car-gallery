import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <nav className = "navbar navbar-expand-lg navbar-light bg-light" >
            <span className="navbar-brand mb-0 h1">CarGallery</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
              <div className = "collapse navbar-collapse" id="navbarNav">
                < ul className = "navbar-nav" >
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/listCars" className="nav-link">List Cars</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/createCar" className="nav-link">Add Car</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;