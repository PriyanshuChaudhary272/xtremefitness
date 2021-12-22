import React from 'react';
import img1 from './images/happy-young-woman-listening-music-smiling-trendy-blue-neon-studio 1.png';
function Subhero2() {
    return (
        <>
            <div className='mx-auto max-min'>
                <div className='subherodiv subherodiv2 ms-auto'>
                    <div className="row d-flex flex-column flex-md-row mt-3 mt-md-0">
                        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center subhero2-left-box subhero2-left-back">
                            <a href="/Brands" className='fullevent mx-md-5'>
                                <div className="row d-flex justify-content-center subhero2-left">
                                    <div className="col-md-11 my-5">
                                        <h1>Flytant For <br />Brands</h1>
                                        <p className="my-3 my-md-4 ">Find the most Felicitous Influencers for Your Brand Promotion and Reach Your Target Audience WorldWide
                                        </p>
                                        <div className="d-flex flex-row justify-content-">
                                            <span className="btn btn-outline-light btn-dark mt-2 px-md-5 py-md-2 navbtn rounded-pill d-flex align-items-center">Promote Now
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 subhero2-right-back">
                            <div className="row d-flex align-items-center justify-content-center subhero2inner">
                                <figure className="figure d-flex align-items-center justify-content-center">
                                    <img src={img1} className="figure-img img-fluid m-0 figure5" alt="..." />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Subhero2;