import React from 'react';
import './common.css'
import { setlogEvent } from '../../Utils/setlogEvent';
import { Link } from 'react-router-dom';

function Navbar() {
    const onLogo = () =>{
        setlogEvent('Nav_Logo',{page_title: 'home'})
    }
    const onContact = () =>{
        setlogEvent('Nav_Contact',{page_title: 'home'})
    }
    return (
        <>
            <nav className="nav-absolute navbar navbar-expand-lg pt-4 max-min mx-auto">
                <div className="container-fluid d-flex justify-content-between">
                    <Link className="navbrand ms-sm-5 d-flex align-items-center" to="/">
                        {/* <img src={logo} alt="" className='navimg' onClick={onLogo}/> */}
                    </Link>
                    <div className="d-flex flex-row justify-content-center contact">
                        <a href='mailto:contact@flytant.com' onClick={onContact} className="btn btn-outline-light me-sm-5 mt-2 px-md-5 py-md-2 navbtn m-auto d-flex align-items-center">Contact</a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;