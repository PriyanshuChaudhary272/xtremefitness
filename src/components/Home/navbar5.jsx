import React from 'react';
import './common.css'
import logo from "./NavbarImg/image (3).png"
import { Link } from 'react-router-dom';
function Navbar5(props) {
    return (
        <>
            <div className="for-brands">
                <nav className="navbar navbar5 navbar-expand-lg py-2 py-sm-4 nav bar2 navbar4 mx-auto">
                    <div className=" container-fluid d-flex justify-content-between  max-min mx-auto">
                        <div className="navbrand ms-sm-5 d-flex align-items-center" to="/">
                            <a className="navbar-brand d-flex align-items-center nav-logo-name" style={{color: "white"}}href>
                                <img src={ props.img || logo} alt="" width="40" height="40" style={{borderRadius: "50%"}}  className="d-inline-block align-text-top mx-1 mx-md-3" />
                                {props.text || "Shiba Inu"}
                            </a>
                        </div>
                        <div className="d-flex flex-row justify-content-center align-items-center contact">
                            <a href={props.navlink || 'https://play.google.com/store/apps/details?id=crypto.shibainux.mineshibas'}  target="_blank" rel="noreferrer" className="btn btn-outline-light me-sm-5 px-md-4 p-1 py-md-2 navbtn m-auto d-flex align-items-center" style={{border:"2px solid white"}}>Download</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar5;