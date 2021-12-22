import React from 'react';
import './common.css'
import logo from "./images/logo_top.png"
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <div className="for-brands">
                <nav className="navbar navbar-expand-lg py-2 py-sm-4 nav bar2 navbar4 mx-auto">
                    <div className=" container-fluid d-flex justify-content-between  max-min mx-auto">
                        <Link className="navbrand ms-sm-5 d-flex align-items-center" to="/">
                            <img src={logo} alt="" className='navimg' />
                        </Link>
                        <div className="d-flex flex-row justify-content-center contact">
                            <a href='mailto:contact@flytant.com' className="btn btn-outline-light me-sm-5 mt-2 px-md-5 py-md-2 navbtn m-auto d-flex align-items-center">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;