import React from 'react';
import whitedots from './images/white dots.png'
// import img1 from '../images/2nd image (2).png'
// import img1 from './images/newimg.png'
import { setlogEvent } from '../../Utils/setlogEvent';
function Subhero() {
    const handleClick = () => {
        setlogEvent('Join_Now_Home', { page_title: `home` })
    }
    return (
        <>
            <div className='subherodiv mx-auto d-lg-flex align-items-center max-min'>
                <div className="row d-flex flex-column-reverse justify-content-center flex-lg-row">
                    <div className="col-lg-7 d-flex align-items-center justify-content-center">
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-12 p-0 d-flex align-items-center justify-content-center">
                                <figure className="figure d-flex justify-content-center mt-3 mt-sm-0 fig">
                                    <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1675&q=80" className="width- 80 figure-img mb-lg-0 img-fluid figure2 my-auto" alt="..." />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-flex flex-column justify-content-center align-items-center subhero2-left-box">

                        <figure className="figure ps-5">
                            <img src={whitedots} className="figure-img figure3" alt="..." />
                        </figure>
                        <a href="/influencers" onClick={handleClick} className='fullevent d-flex justify-content-center '>
                        <div className="row d-flex justify-content-center subhero-right mt-4">
                            <div className="col-lg-11 my-5">
                                <h1>Equipments</h1>
                                <p className="font-grey my-1 my-md-4">Join the most effective and muscle building environment.</p>
                                <div className="d-flex justify-content-left">
                                    <span className="btn btn-outline-light btn-dark mt-3 px-lg-5 py-md-2 navbtn d-flex rounded-pill align-items-center">Join Now</span>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Subhero;