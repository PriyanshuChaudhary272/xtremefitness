import React from 'react';
import { setlogEvent } from '../../Utils/setlogEvent';

function Subhero2() {
    const handleClick = () => {
        setlogEvent('Promote_Now_Home', { page_title: 'home' })
    }
    return (
        <>
            <div className='mx-auto max-min'>
                <div className='subherodiv subherodiv2 ms-auto'>
                    <div className="row d-flex flex-column flex-md-row mt-3 mt-md-0">
                        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center subhero2-left-box subhero2-left-back">
                            <a href="/brands" onClick={handleClick}className='fullevent mx-md-5'>
                                <div className="row d-flex justify-content-center subhero2-left">
                                    <div className="col-md-11 my-5">
                                        <h1 className=''>Trainers<br /></h1>
                                        <p className="my-3 my-md-4 font-grey">Looking for a personal trainer in New Delhi? Get training from best trainers at home or gym.
                                        </p>
                                        <div className="d-flex flex-row justify-content-">
                                            <span className="btn btn-outline-light btn-dark mt-2 px-md-5 py-md-2 navbtn rounded-pill d-flex align-items-center">Have a look
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 subhero2-right-back">
                            <div className="row d-flex align-items-center justify-content-center subhero2inner">
                                <figure className="figure p-0 m-0 d-flex align-items-center justify-content-center">
                                    <img src="https://images.unsplash.com/photo-1601106783438-70b7288f5c15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80" className="figure2 figure-img p-0 img-fluid m-0 figure5" alt="..." />
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