import React from 'react';
import logo from './images/logo_top.png'
import footerlink1 from './contacticons/Group 1668 (1).png'
import footerlink2 from './contacticons/Group 1667.png'
import s1 from './images/insta.png'
import s2 from './images/youtube.png'
import s3 from './images/fb.png'
import s4 from './images/linked.png'
import s5 from './images/twitter.png'
import s6 from './images/mail.png'
import { setlogEvent } from '../../Utils/setlogEvent';
import { useLocation } from 'react-router-dom';
function Footer() {
    const location = useLocation();
    const handleClick = (i) =>{
        if(location.pathname === '/')
        {
            setlogEvent(`Footer_${i}`, {page_title: 'home'})

        }
        else
        {
            setlogEvent(`Footer_${i}`, {page_title: location.pathname})
        }
    }
    return (
        <>
            <div className='footer pt-5'>
                <div className="row mx-auto list2 ">
                    <div className="my-5 offset-sm-0 d-flex flex-column flex-sm-row align-items-center justify-content-center">
                        <div className="row m-0 d-flex justify-content-between">
                            <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
                                <div className='px-2 px-md-5'>
                                    <a className="navbar-brand d-flex justify-content-center" href="/">
                                        {/* <img src={logo} alt="something" onClick={() => {handleClick('Flytant')}} width="100%" height="100%" className="d-inline-block align-text-top" /> */}
                                    </a>
                                </div>
                                <div className="row my-5 d-flex justify-content-center">
                                    <div className="col-xl-10 footerlast">
                                        <div className="row d-flex flex-column flex-sm-row">
                                            <div className="col d-flex p-0 justify-content-center">
                                                <div className="col d-flex align-items-center">
                                                    <a href="https://www.instagram.com/flytant/" target="_blank" rel="noreferrer"><img src={s1} onClick={() => {handleClick('Insta')}} className=" figure-img img-fluid rounded px-3 px-md-1" alt="..." /></a>
                                                </div>
                                                <div className="col d-flex align-items-center ">
                                                    <a href="https://www.youtube.com/channel/UC_r46_UgBvaG2k94LDjEIWQ" target="_blank" rel="noreferrer" ><img src={s2} onClick={() => {handleClick('Youtube')}} className=" figure-img img-fluid rounded px-3 px-md-1" alt="..." /></a>
                                                </div>
                                                <div className="col d-flex align-items-center ">
                                                    <a href="https://www.facebook.com/flytantapp/" target="_blank" rel="noreferrer" ><img src={s3} onClick={() => {handleClick('Facebook')}} className="figure-img img-fluid rounded px-3 px-md-1" alt="..." /></a>
                                                </div>
                                            </div>
                                            <div className="col d-flex p-0 justify-content-center" >
                                                <div className="col d-flex align-items-center">
                                                    <a href="https://www.linkedin.com/company/flytant/mycompany/" target="_blank" rel="noreferrer" ><img src={s4} onClick={() => {handleClick('Linkedin')}} className=" figure-img img-fluid rounded px-3 px-md-1" alt="..." /></a>
                                                </div>
                                                <div className="col d-flex align-items-center">
                                                    <a href="https://twitter.com/flytant" target="_blank" rel="noreferrer" ><img src={s5} onClick={() => {handleClick('Twitter')}} className=" figure-img img-fluid rounded px-3 px-md-1" alt="..." /></a>
                                                </div>
                                                <div className="col d-flex align-items-center">
                                                    <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&href=contact@flytant.com" target="_blank" rel="noreferrer" ><img src={s6} onClick={() => {handleClick('Mail')}} className="  figure-img img-fluid rounded px-3 px-md-1" alt="..." /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col list d-flex justify-content-center">
                                <div className="col-md-4">

                                    <ul className="list-group footer-list">
                                        <li className="list-group-item list"><a className="nav-link p-0" onClick={() => handleClick('Home')} href="/">Home</a></li>
                                        <li className="list-group-item list"><a className="nav-link p-0" onClick={() => handleClick('About')} href="/about">About</a></li>
                                        {/* <li className="list-group-item list"><a className="nav-link p-0" onClick={() => handleClick('Blogs')} href="/blogs">Blogs</a></li> */}
                                        {/* <li className="list-group-item list"><a className="nav-link p-0" onClick={() => handleClick('Career')} href="/career">Career</a></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col list d-flex justify-content-center">
                                <div className="col-md-4">
                                    <ul className="list-group footer-list">
                                        <li className="list-group-item list"><a className="nav-link p-0" onClick={() => handleClick('Contact')} href="/contact">Contact</a></li>
                                        <li className="list-group-item list"><a className="nav-link p-0" onClick={() => handleClick('Contact')} href="/contact">Products</a></li>
                                        {/* <li className="list-group-item list"><a className="nav-link p-0" onClick={() => handleClick('Terms')} href="/terms">Terms</a></li> */}
                                        {/* <li className="list-group-item list"><a className="nav-link p-0" onClick={() => handleClick('Ads')} href="/ads">Ads</a></li> */}
                                        {/* <li className="list-group-item list"><a className="nav-link p-0" onClick={() => handleClick('Privacy')} href="/privacy">Privacy</a></li> */}
                                        {/* <li className="list-group-item list"><a className="nav-link p-0" onClick={() => handleClick('Privacy')} href="/brandscontact">Brands</a></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="d-flex flex-column align-items-center justify-content-center">
                                </div>
                            </div>
                            <hr />
                            <p className='text-center footerline' id='footercopy'>© Xtremefitness 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;