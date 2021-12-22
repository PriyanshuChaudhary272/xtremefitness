import React from 'react';
import './brands.css'
import img3 from './brandsImg/Group 1660.png';
// import imgleft from './brandsImg/unsplash_bMMOBVp6KQU.png'
import square from './brandsImg/squaredot.png'
import whitedots from '../Home/images/white dots.png'
function Brandsub1(props) {
    return (
        <>
            <div className="Brandsub1">
                <span className="Brand-sub1-rectangle"></span>
                <div className="d-flex align-items-center justify-content-center Brand-heading">
                    <div>
                        <h1 className='text-center benefits'>{props.mainheading}
                        </h1>
                        <img src={img3} alt="" className='d-block brand-heading-line' />
                    </div>
                </div>
                <div className='d-flex justify-content-center max-min mx-auto Brandsub1-background-div'>
                    <div className="row Brandsub1-background">
                        <div className="col-12 d-flex justify-content-between">
                            <img src={square} alt="" className='squaredot mt-md-5 ms-4' />
                            <img src={whitedots} className='Top-Brandsub1-dots Brandsub1-background-whitedots pt-md-5 pe-md-5 me-2' alt="" />
                        </div>
                        <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
                            <div className="col-md-6 d-flex justify-content-center align-items-center">
                                <div className="Brandsub1-left-img d-flex justify-content-center align-items-center">
                                    <img className='img-fluid' src={props.img} alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center  align-items-center">
                                <div className="col-md-8  d-flex flex-column Brand-div-border Brandsub1-left-img">
                                    <h1 className='mb-3'>{props.heading}</h1>
                                    <p>{props.para}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Brandsub1-center-rectangle"></div>
            </div>
        </>
    );
}

export default Brandsub1;