import React, { useState } from 'react'
import Navbar5 from '../Home/navbar5';
import triangle from './CryptoImgs/Vector 24.svg'
import img1 from './CryptoImgs/Group 3519.png'
import playbtn from '../Home/images/playbutton.png';
import './Crypto.css'
const CryptoShiba = (props) => {
    const [play, setPlay] = useState(false);
    const handleclick = (e) => {
        e.preventDefault();
        setPlay(true)
    }

    return (
        <div className="brandsdiv">
            <img src={props.back || triangle} className='triangle' alt="" />
            <Navbar5 text ={props.navText} img={props.navLogo}/>
            <div className="d-flex align-items-center justify-content-center ">
                <div className="row brand-hero crypto-hero d-flex flex-column flex-lg-row max-min mx-auto">
                    <div className="col-lg-7 d-flex flex-column flex-lg-row align-items-center justify-content-center p-0">
                        <div className="brand-hero-left">
                            <h1 className='mb-2 mb-lg-4'>{props.heading || "Grab Unlimited Free Shiba Inu"}</h1>
                            <p>{props.para||  <span> Download the App to collect <br /> Rewards & Withdraw Shiba Inu</span>} </p>
                            <div className='mt-3'>
                                <a className="btn btn-light crypto-download-btn navbar-brand rounded py-md-2 px-ms-4 my-3" target="_blank" rel="noreferrer" href={props.button || 'https://play.google.com/store/apps/details?id=crypto.shibainux.mineshibas'}>
                                    {props.btnText || "Download"}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 p-0 brandheroimg d-flex align-items-center mt-4 mt-lg-0 justify-content-center">
                        {
                            play ?
                                <iframe id="ytplayer" className='crypto-yt-video-div mt-md-0 me-lg-5 crypto-yt-video' type="text/html" title='youtubevideo' marginwidth="0" scrolling="auto"
                                    src={props.video || "https://www.youtube.com/embed/dQvsLOn8nX4?autoplay=1"}
                                    frameborder="0" allowfullscreen></iframe>
                                :
                                <>
                                        <div className='crypto-video d-flex justify-content-center'>
                                            <img src={props.img || img1} className='brand-hero-img' alt="" />
                                            <img src={playbtn} onClick={handleclick} alt="" className='crypto-video-playbtn' />
                                        </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoShiba
