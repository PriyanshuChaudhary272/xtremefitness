import React from 'react';
import './brands.css'
import square from './brandsImg/squaredot.png'
import whitedots from '../Home/images/white dots.png'
function Brandsub2(props) {
    return (
        <>
            <div className="Brandsub1 Brandsub2">
                <div className='d-flex justify-content-center max-min mx-auto  Brandsub1-background-div'>
                    <div className="row Brandsub1-background">
                        <div className="col-12 d-flex justify-content-between">
                            <img src={whitedots} className='Brandsub1-background-whitedots mt-md-5 ms-4' alt="" />
                            <img src={square} alt="" className='squaredot mt-4 mt-md-5 me-4' />
                        </div>
                        <div className="row d-flex flex-column flex-md-row justify-content-center align-items-center">
                            <div className="col-md-6 d-flex justify-content-center Brandsub1-left-img align-items-center">
                                <div className="col-md-8 d-flex flex-column Brand-div-border ">
                                    <h1 className='mb-3'>{props.heading}</h1>
                                    <p>{props.para}</p>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center align-items-center">
                                <div className="Brandsub1-left-img d-flex justify-content-center align-items-center">
                                    <img className='img-fluid' src={props.img} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Brandsub2-center-rectangle"></div>
                <div className="Brandsub1-center-rectangle"></div>
            </div>
        </>
    );
}

export default Brandsub2;