import React from 'react';
import img1 from './images/bellavi.png'
import img2 from './images/freya.png'
import img3 from './images/himalya.png'
import img4 from './images/budwe.png'
import img5 from './images/mglam.png'
import img6 from './images/nyka.png'

function Bottom() {
    return (
        <>
            <div className='brandsdiv'>
                <div className="row d-flex flex-column align-items-center pt-5">
                    <div className="col-11 brands">
                        <h2>Choose from 100+ Brands</h2>
                        <div className="row my-5 d-wrap">
                            <div className="col d-flex flex-column align-items-center">
                                <img src={img1}className=" figure-img img-fluid rounded sizechange" alt="..." />
                                <p className='text-center'>BELLAVITA</p>
                            </div>
                            <div className="col d-flex flex-column align-items-center">
                                <img src={img2}className=" figure-img img-fluid rounded sizechange" alt="..." />
                                <p className='text-center'>FREYA TREASURE</p>
                            </div>
                            <div className="col d-flex flex-column align-items-center">
                                <img src={img3}className=" figure-img img-fluid rounded sizechange" alt="..." />
                                <p className='text-center'>HIMALAYA</p>
                            </div>
                            <div className="col d-flex flex-column align-items-center">
                                <img src={img4}className=" figure-img img-fluid rounded sizechange" alt="..." />
                                <p className='text-center'>BUDWIESER</p>
                            </div>
                            <div className="col d-flex flex-column align-items-center">
                                <img src={img5}className=" figure-img img-fluid rounded sizechange" alt="..." />
                                <p className='text-center'>MY GLAMM</p>
                            </div>
                            <div className="col d-flex flex-column align-items-center">
                                <img src={img6}className=" figure-img img-fluid rounded sizechange" alt="..." />
                                <p className='text-center'>NYKAA</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bottom;