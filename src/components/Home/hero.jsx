import React, { useState } from 'react';
import { setlogEvent } from '../../Utils/setlogEvent';
import triangle from './images/Rectangle 1355.svg'
function Hero() {
    const [play, setPlay] = useState(false);
    const handleclick = (e) => {
        e.preventDefault();
        setPlay(true)
        setlogEvent('Play_Video_Home', { page_title: 'home' })
    }
    const handleios = () => {
        setlogEvent('iOS_Download', { page_title: 'home' })
    }
    const handleAndroid = () => {
        setlogEvent('Android_Download', { page_title: 'home' })
    }
    return (
        // <>
            <div className='triangle-management '>
                <div className="herodiv mx-auto row flex-lg-row mt-lg-0">
                    <div className="col-md-6 hero-left-half d-flex flex-column justify-content-center align-items-center">
                        {/* <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12 mb-5 mb-md-0 ms-4">
                                <h1><span style={{color:"#F32424"}}>Xtreme</span> Fitness </h1>
                                <p className="my-3 mb-md-5">Find influencers and brands of your niche</p>
                                </div>
                            </div> */}
                        <div className='width-90'>
                            <h1 className=''><span style={{ color: "#F32424" }}>Xtreme</span> Fitness </h1>
                            <p className="my-md-3 mb-md-3 ">Build your dream body.</p>
                           <a href="https://goo.gl/maps/U9RSwXybYso9Sv2e8" rel="noreferrer" target="_blank"> <p style={{ color: "#B2B2B2"}} className='mb-0 p-0 fs-6 col-md-10'>4/1225, Street Number 3, Bhola Nath Nagar, Shalimar Park, Shahdara, Delhi, 110032</p></a>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.7740753583453!2d77.28019082676317!3d28.66648262612466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1f48c7ea9f%3A0x2a8db1480e268e4a!2sXtreme%20Fitness!5e0!3m2!1sen!2sin!4v1654938323470!5m2!1sen!2sin" className='google-map img-fluid my-4' width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div className="row ">
                            <div className="col-12 p-0">
                                <figure className="fi gure video-player mb-0 d-flex align-items-center justify-content-center">
                                    {
                                        // play ?
                                        // <iframe id="ytplayer" className='mt-5 mt-md-0' type="text/html" title='youtubevideo' marginWidth="0" scrolling="auto"
                                        //     src="https://www.youtube.com/embed/i0Nxig4oTz8?autoplay=1"
                                        //     frameBorder="0" allowFullScreen></iframe>
                                        // :
                                        <>
                                            {/* <div className="video-box"> */}
                                            {/* <div className='play-reference'> */}
                                            <img className='video1 img-fluid' src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80" alt='videoimg' />
                                            {/* <div className="player-controls play-button" style={{ width: '10%' }}> */}
                                            {/* <img src={playbutton} className="navbar-brand" style={{ cursor: 'pointer' }} onClick={handleclick} alt="" width="100%" /> */}
                                            {/* </div> */}
                                            {/* </div> */}
                                            {/* </div> */}
                                        </>
                                    }
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="trianglepng">
                </div> */}
                <img src={triangle} className='triangleimg' alt="" />
            </div>
        // </>
    );
}

export default Hero;