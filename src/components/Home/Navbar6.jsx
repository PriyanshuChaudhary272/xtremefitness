import React from 'react';
import './common.css'
import '../LoginHome/common2.css'
import logo from "./images/logo_top.png"
import { setlogEvent } from '../../Utils/setlogEvent';
import { Link } from 'react-router-dom';
import linkimg from './NavbarImg/Vector.svg';
import linkimg1 from './NavbarImg/Vector (1).svg';
import linkimg2 from './NavbarImg/icon-park_message-unread.svg';
import profile from './NavbarImg/Ellipse 45.png'
import Dropdown from 'react-bootstrap/Dropdown';
function Navbar6(props) {
    const onLogo = () => {
        setlogEvent('Nav_Logo', { page_title: 'home' })
    }
    // const onContact = () => {
    //     setlogEvent('Nav_Contact', { page_title: 'home' })
    // }
    return (
        <>
            <nav className="navbar navbar-expand-lg hero2-navbar pt-4">
                <div className="navbar6-container d-flex justify-content-between align-items-center max-min mx-auto">
                    <Link className="navbrand ms-sm-5 d-flex align-items-center" to="/">
                        <img src={logo} alt="" className='navimg navimg2' onClick={onLogo} />
                    </Link>
                    <a className='btn btn-dark rounded-pill navbtn6 me-sm-5 px-md-3 py-md-3 mx-auto navbtn m-auto d-flex align-items-center' href>
                        <img src={linkimg} alt="" className='pe-2' /> Create Campaign</a>
                    <a className='mx-2' href>
                        <img src={linkimg1} alt="" className='pe-2' /></a>
                    <a className='mx-2' href>
                        <img src={linkimg2} alt="" className='pe-2' /></a>
                    <img src={props.logo || profile} alt="" width="50" height="50" style={{ borderRadius: "50%" }} className="d-inline-block mx-1 ms-md-4" />
                    <Dropdown className='me-3'>
                        <Dropdown.Toggle variant="" id="dropdown-basic" className='navbar6-profile-text' style={{color:"white"}}>
                        Justin Emma
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='navbar6-drop-text'>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </nav>
        </>
    );
}

export default Navbar6;