import React from 'react';
import { setlogEvent } from '../../Utils/setlogEvent';
function Subhero3() {
    const handleClick = () => {
        setlogEvent('Get_Onboard_Home', { page_title: 'home' })
    }
    return (
        <>
            <div className='subherodiv mx-auto subherodiv2 subherodiv3 d-flex align-items-center max-min justify-content-center'>
                <div className="row d-flex flex-column-reverse justify-content-center  subhero3-left-box align-items-center flex-md-row">
                    <div className="col-md-6 subhero3-right-back">
                        <div className="row d-flex align-items-center  my-5">
                            <figure className="figure d-flex align-items-center justify-content-center m-0">
                                <img src="https://images.unsplash.com/photo-1517344368193-41552b6ad3f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className="figure2 figure-img img-fluid m-0" alt="..." />
                            </figure>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center subhero3-right">
                        <a href="/" onClick={handleClick} className='fullevent'>
                            <div className="row d-flex justify-content-center subhero-right ">
                                <div className=" col-md-11 my-5">
                                    <h1>Transformations</h1>
                                    <p className="my-3 fs-5 my-md-4">Exercise is king. Nutrition is queen. Put them together and you've got a kingdom.  <br />- Jack Lalanne

                                    </p>
                                    <div className="d-flex flex-row justify-content-">
                                        <span className="btn btn-outline-light btn-dark mt-2 px-md-5 py-md-2 navbtn rounded-pill d-flex align-items-center">Get Onboard
                                        </span>
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

export default Subhero3;