import React from 'react'
import img3 from './About/young-woman-blogger-recording-video-camera 1.png'
import img4 from './About/young-woman-blogger-recording-video-camera 2.png'
// import img6 from './About/african-american-vlogger-using-smartphone-film-podcast 1.png'
// import img5 from './About/woman-doing-beauty-vlog-home 1.png'
// import { setlogEvent } from '../../Utils/setlogEvent';
import './about.css'
// import { Link } from 'react-router-dom'
const Hero = (data) => {
    // const handleClick = () =>{
    //     setlogEvent('Download_Now_About', { page_title: '/about' });
    // }
    return (
        <>
            <div>
                <div className="row d-flex justify-content-center aboutdiv max-min mx-auto">
                    <div className="col-sm-10 col-11 aboutdiv2">
                        <div>
                            <h1 className='my-5'>{data.name||"About"}</h1>
                            <h3 className='my-5'>{data.role || "Fastest Growing Platform Connecting Brands and Influencers"}
                            </h3>
                    <div className="row imgpair">
                        <div className="col-md-6 d-flex  about-mobile-img justify-content-md-end">
                            <img src={data.img1 || img3} className='imgpair1' alt="" />
                        </div>
                        <div className="col-md-6 d-flex   about-mobile-img-hide justify-content-start">
                            <img src={data.img2 || img4} className='imgpair2' alt="" />
                        </div>
                    </div>
                            <p className='mt-5 mb-2'>{ data.intro ||"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sint libero sequi, cumque ratione, quas ipsam atque et non odit unde. Rem ullam pariatur vero adipisci quaerat labore hic cupiditate? "}</p>
                        </div>
                    </div>
                    {/* <div className="col-sm-10 col-11 aboutdiv2 aboutdiv3">
                        <div>
                            <h3 className='my-5'>Tailor-Made Platform for Brands
                            </h3>
                            <p className='mt-5 mb-2'>We provide brands a complete Transparent way to post campaigns and Connect with Influencers directly.  Our app consists of some amazing features like Social Score, Social Search Engine, Social Profile and many more that ensures hassle free methods to onboard influencers and promote your Products to reach a global Audience.
                            </p>
                        </div>
                    </div>
                    <div className="row imgpair">
                        <div className="col-md-6 d-flex about-mobile-img justify-content-md-end">
                            <img src={img6} className='imgpair1' alt="" />
                        </div>
                        <div className="col-md-6 d-flex   about-mobile-img-hide justify-content-start">
                            <img src={img5} className='imgpair2' alt="" />
                        </div>
                    </div>
                    <div className="col-sm-10 col-11 aboutdiv2 aboutdiv3">
                        <div>
                            <h3 className='my-5'>Best Brand-Deals For Influencers
                            </h3>
                            <p className='mt-5 mb-2'>We ensure even micro influencers can monetise their social media content. As an influencer it's so easy to connect with Brands. All you have to do is Download the App and Apply for Campaigns or Directly message the Brands for Sponsorships.
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <div className='greydiv mt-3 mt-md-5'>
                <h2>Get Onboard!
                </h2>
                <p className='mt-3'>Fastest Growing Influencers Community
                </p>
                <Link onClick={handleClick} className='btn btn-dark rounded-pill px-5 py-3 mt-3 joinus' to="/">Download Now
                </Link>
            </div> */}
            <div className="row d-flex justify-content-center aboutdiv last  max-min mx-auto">
                <div className="col-sm-10 col-11">
                    <h3 className='my-3 my-md-4'>Contacts
                    </h3>
                    <p>Flytant is a subsidiary of Flytant Developers Pvt. Ltd.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Hero;
