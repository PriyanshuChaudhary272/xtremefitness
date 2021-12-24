import React from 'react';
import './brands.css'
import linkbtn1 from '../Home/images/Group 1587.png'
import linkbtn2 from '../Home/images/Group 1588.png'
import img2 from './brandsImg/Group 1648.png'
import Navbar4 from '../Home/navbar4';
import triangle from './brandsImg/Vector 23.svg'
import blackdots from '../Home/images/black dots.png'
function Brands(props) {
    return (
        <>
            <div className="brandsdiv">
                <img src={triangle} className='triangle' alt="" />
                <Navbar4 />
                <div className="d-flex align-items-center justify-content-center ">
                    <div className="row brand-hero d-flex flex-column flex-lg-row max-min mx-auto">
                        <div className="col-lg-7 d-flex flex-column flex-lg-row align-items-center justify-content-center p-0">
                            <div className="brand-hero-left">
                                <h1 className='mb-2 mb-lg-5'>{props.heading}</h1>
                                <p>{props.para}</p>
                                    <img src={img2} className='dotline' alt="" />
                                {/* <div className='mt-3'>
                                    <a className="navbar-brand" href='https://firebasestorage.googleapis.com/v0/b/flytant-app.appspot.com/o/androidApp%2FFlytant_1.0.4.apk?alt=media&amp;token=6e76d120-97a7-44d0-af2b-cd99466b0db0'>
                                        <img src={linkbtn1} className='d-inline mt-2 herobtn' alt="" width="180" />
                                    </a>
                                    <a className="navbar-brand" href='https://apps.apple.com/in/app/flytant/id1530158515'>
                                        <img src={linkbtn2} className='d-inline mt-2 herobtn' alt="" width="180" />
                                    </a>
                                </div> */}
                                <div className='homepage-download-links d-flex flex-column flex-md-row'>
                                    <a className="navbar- brand me-0 me-md-3" href='https://firebasestorage.googleapis.com/v0/b/flytant-app.appspot.com/o/androidApp%2FFlytant_1.0.4.apk?alt=media&amp;token=6e76d120-97a7-44d0-af2b-cd99466b0db0'>
                                        <img src={linkbtn1} className='d-inline mt-2 herobtn' alt="" width="180" />
                                    </a>
                                    <a className="navbar- brand" href='https://apps.apple.com/in/app/flytant/id1530158515'>
                                        <img src={linkbtn2} className='d-inline mt-2 herobtn' alt="" width="180" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 p-0 brandheroimg d-flex align-items-center mt-4 mt-lg-0 justify-content-center">
                            <img src={props.img} className='brand-hero-img' alt="" />
                        </div>
                    </div>
                </div>
                <img src={blackdots} className='brand-hero-dots' alt="" />
            </div>
        </>
    );
}

export default Brands;