import React, { useState } from 'react';
import vdimg from './images/Group 1617.png'
import playbutton from './images/playbutton.png'
import linkbtn1 from './images/Group 1587.png'
import linkbtn2 from './images/Group 1588.png'
import triangle from './images/Rectangle 1355.svg'
function Hero() {
    const [play, setPlay] = useState(false);
    const handleclick = (e) => {
        e.preventDefault();
        setPlay(true)
    }
    return (
        <>
            <div className='herodiv mx-auto'>
                <div className="herodiv row flex-lg-row mt-5 mt-lg-0">
                    <div className="col-md-6 h-left d-flex justify-content-center align-items-center">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12 mb-5 mb-md-0 ms-4">
                                <h1>Connecting<br /> Brands & Influencers</h1>
                                <p className="my-3 mb-md-5">Find influencers and brands of your niche</p>
                                <div className='homepage-download-links d-flex flex-column flex-lg-row'>
                                    <a className="navbar- brand me-0 me-md-3" href='https://firebasestorage.googleapis.com/v0/b/flytant-app.appspot.com/o/androidApp%2FFlytant_1.0.4.apk?alt=media&amp;token=6e76d120-97a7-44d0-af2b-cd99466b0db0'>
                                        <img src={linkbtn1} className='d-inline mt-2 herobtn' alt="" width="220" />
                                    </a>
                                    <a className="navbar- brand" href='https://apps.apple.com/in/app/flytant/id1530158515'>
                                        <img src={linkbtn2} className='d-inline mt-2 herobtn' alt="" width="220" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 my-2">
                        <div className="row  d-flex justify-content-center">
                            <div className="col-12">
                                <figure className="figure video-player mb-0 d-flex align-items-center justify-content-center">
                                    {
                                        play ?
                                            <iframe id="ytplayer" className='mt-5 mt-md-0' type="text/html" title='youtubevideo' marginwidth="0" scrolling="auto"
                                                src="https://www.youtube.com/embed/i0Nxig4oTz8?autoplay=1"
                                                frameborder="0" allowfullscreen></iframe>
                                            :
                                            <>
                                                <div className="video-box">
                                                    <img className='video1 img-fluid' src={vdimg} alt='videoimg' />
                                                    <div className="player-controls play-button" style={{ width: '20%' }}>
                                                        <img src={playbutton} className="navbar-brand" style={{ cursor: 'pointer' }} onClick={handleclick} alt="" width="55%" />
                                                    </div>
                                                </div>
                                            </>
                                    }
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="trianglepng">
                </div> */}
            </div>
            <img src={triangle} className='triangleimg' alt="" />
        </>
    );
}

export default Hero;