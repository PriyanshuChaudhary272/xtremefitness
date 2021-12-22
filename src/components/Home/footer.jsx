import React from 'react';
import logo from './images/logo_top.png'
import footerlink1 from './images/ios footer.png'
import footerlink2 from './images/android footer.png'
import s1 from './images/insta.png'
import s2 from './images/youtube.png'
import s3 from './images/fb.png'
import s4 from './images/linked.png'
import s5 from './images/twitter.png'
import s6 from './images/mail.png'
function Footer() {
    return (
        <>
            <div className='footer pt-5'>

                <div className="row mx-auto list2 ">
                    <div className="my-5 offset-sm-0 d-flex flex-column flex-sm-row align-items-center justify-content-center">
                        <div className="row m-0 d-flex justify-content-between">
                            <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
                                <div className='px-2 px-md-5'>
                                    <a className="navbar-brand d-flex justify-content-center" href="/">
                                        <img src={logo} alt="something" width="100%" height="100%" className="d-inline-block align-text-top" />
                                    </a>
                                </div>
                                <p className="text-start footerline">
                                    Connecting Brands & Influencers
                                </p>
                                <div className="row my-5 d-flex justify-content-center">
                                    <div className="col-xl-10 footerlast">
                                        <div className="row d-flex flex-column flex-sm-row">
                                            <div className="col d-flex p-0 justify-content-center">
                                                <div className="col d-flex align-items-center">
                                                    <a href="https://www.instagram.com/flytant/" target="_blank" rel="noreferrer"><img src={s1} className=" figure-img img-fluid rounded px-3 px-md-1" alt="..." /></a>
                                                </div>
                                                <div className="col d-flex align-items-center ">
                                                    <a href="https://www.youtube.com/channel/UC_r46_UgBvaG2k94LDjEIWQ" target="_blank" rel="noreferrer" ><img src={s2} className=" figure-img img-fluid rounded px-3 px-md-1" alt="..." /></a>
                                                </div>
                                                <div className="col d-flex align-items-center ">
                                                    <a href="https://www.facebook.com/flytantapp/" target="_blank" rel="noreferrer" ><img src={s3} className="figure-img img-fluid rounded px-3 px-md-1" alt="..." /></a>
                                                </div>
                                            </div>
                                            <div className="col d-flex p-0 justify-content-center" target="_blank" rel="noreferrer" >
                                                <div className="col d-flex align-items-center">
                                                    <a href="https://www.linkedin.com/company/flytant/mycompany/" target="_blank" rel="noreferrer" ><img src={s4} className=" figure-img img-fluid rounded px-3 px-md-1" alt="..." /></a>
                                                </div>
                                                <div className="col d-flex align-items-center">
                                                    <a href="https://twitter.com/flytant" target="_blank" rel="noreferrer" ><img src={s5} className=" figure-img img-fluid rounded px-3 px-md-1" alt="..." /></a>
                                                </div>
                                                <div className="col d-flex align-items-center">
                                                    <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&href=contact@flytant.com" target="_blank" rel="noreferrer" ><img src={s6} className="  figure-img img-fluid rounded px-3 px-md-1" alt="..." /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col list d-flex justify-content-center">
                                <div className="col-md-4">

                                    <ul className="list-group footer-list">
                                        <li className="list-group-item list"><a className="nav-link p-0" href="/">Home</a></li>
                                        <li className="list-group-item list"><a className="nav-link p-0" href="/about">About</a></li>
                                        <li className="list-group-item list"><a className="nav-link p-0" href="/blogs">Blogs</a></li>
                                        <li className="list-group-item list"><a className="nav-link p-0" href="/career">Career</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col list d-flex justify-content-center">
                                <div className="col-md-4">
                                    <ul className="list-group footer-list">
                                        <li className="list-group-item list"><a className="nav-link p-0" href="/contact">Contact</a></li>
                                        <li className="list-group-item list"><a className="nav-link p-0" href="/terms">Terms</a></li>
                                        <li className="list-group-item list"><a className="nav-link p-0" href="/ads">Ads</a></li>
                                        <li className="list-group-item list"><a className="nav-link p-0" href="/privacy">Privacy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="d-flex flex-column align-items-center justify-content-center">
                                    <p className='getthe'>Get the apps!</p>
                                    <div className='d-flex flex-column align-items-center justify-content-center'>
                                        <a className="navbar-brand" href='https://apps.apple.com/in/app/flytant/id1530158515' target="_blank" rel="noreferrer" >
                                            <img src={footerlink1} className='d-inline' alt="" width="220" />
                                        </a>
                                        <a className="navbar-brand" href='https://firebasestorage.googleapis.com/v0/b/flytant-app.appspot.com/o/androidApp%2FFlytant_1.0.4.apk?alt=media&amp;token=6e76d120-97a7-44d0-af2b-cd99466b0db0' target="_blank" rel="noreferrer" >
                                            <img src={footerlink2} className='d-inline my-4' alt="" width="220" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <p className='text-center footerline' id='footercopy'>© Flytant 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;