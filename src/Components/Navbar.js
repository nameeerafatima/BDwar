// import React from 'react';
// import Index from './Index';

// import {NavLink, Link} from 'react-router-dom'
// import {Index} from "./Index"

export const Navbar = () => {
    return <div>
        <nav className="navbar navbar-expand-lg sticky-top well">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo02">
                
                <ul className="navbar-nav mb-2 mb-lg-0">

                    <li className="nav-item px-2">
                        <a className="nav-link" href="/" >
                            <b>BHAVISHYA DWAR</b>
                        </a>
                        {/* <Link className='' to="/Index">Index</Link> */}
                    </li>

                    <li className="nav-item px-2">
                        <a className="nav-link" href="/dashboard">
                            <i className="fa fa-fw fa-home"></i>
                            Home
                        </a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="/alljobs">
                            <i className="fa fa-fw fa-list-ul"></i>
                            All Jobs
                        </a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="/about">
                            <i className="fa fa-fw fa-info-circle"></i>
                            About Us
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/contact">
                            <i className="fa fa-fw fa-phone"></i>
                            Contact Us
                        </a>
                    </li>
                </ul>

                <div>
                    <a className="nav-link" href="/login">
                        <i className="fa fa-fw fa-user"></i>
                        Log In
                    </a>
                </div>
                    
            </div>
        </div>
    </nav>
    </div>
}

// export default Navbar;