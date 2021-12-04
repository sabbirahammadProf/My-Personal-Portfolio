import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" >Sabbir Ahammad</Link>
                    <button className="navbar-toggler outline-none shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Go to a page</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                            </ul>
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item"><Link className="nav-link" to="#about">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;