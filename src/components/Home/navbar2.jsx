import React from 'react';
import './common.css'
import logo from "./images/logo_top.png"
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-2 py-sm-4 navbar2 mx-auto">
                <div className=" container-fluid d-flex justify-content-between  max-min mx-auto">
                    <Link className=" ms-sm-5 d-fle x align-items-center navlogo2" to="/">
                        <img src={logo} alt="" className='navimg2' />
                    </Link>
                    <div className="d-flex align-items-center">
                        {/* <div className="d-flex flex-row justify-content-center "> */}
                            <a href='mailto:contact@flytant.com' className="btn mt- 2 px-md-5 py-md-2 navbtn m-auto d-flex align-items-center contact2">Contact</a>
                        {/* </div> */}
                        <Link className='btn btn-light navdownload me-sm-5' to="/">Download</Link>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default Navbar;