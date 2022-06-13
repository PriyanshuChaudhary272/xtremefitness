import React from 'react'
import img3 from '../AboutUs/About/young-woman-blogger-recording-video-camera 1.png'
// import img4 from '../AboutUs/About/young-woman-blogger-recording-video-camera 2.png'
// import { setlogEvent } from '../../Utils/setlogEvent';
import '../AboutUs/about.css'
const TrainerIntro = (data) => {
    // const handleClick = () =>{
    //     setlogEvent('Download_Now_About', { page_title: '/about' });
    // }
    return (
        <>
            <div>
                <div className="row d-flex justify-content-center aboutdiv max-min mx-auto">
                    <div className="col-sm-10 col-11 aboutdiv2">
                        <div>
                            <h1 className='ml-5'>{data.name||"About"}</h1>
                            <h3 className='ml-5'>{data.role || "Fastest Growing Platform Connecting Brands and Influencers"}
                            </h3>
                    <div className="row imgpair">
                        <div className="col-md-6 d-flex  about-mobile-img justify-content-md-end">
                            <img src={data.img1 || img3} className='rounded img-fluid imgpair1' alt="" />
                        </div>
                        <div className="col-md-6 d-flex   about-mobile-img-hide justify-content-start">
                            {/* <img src={data.img2 || img4} className='rounded img-fluid imgp air2' alt="" /> */}
                        </div>
                    </div>
                            <p className='mt-5 mb-2'>{ data.intro ||"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sint libero sequi, cumque ratione, quas ipsam atque et non odit unde. Rem ullam pariatur vero adipisci quaerat labore hic cupiditate? "}</p>
                        </div>
                    </div>
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
                    <p>Mobile - {`${data.contact}`}
                    </p>
                    <p>Email - {`${data.email}`}
                    </p>
                </div>
            </div>
        </>
    )
}

export default TrainerIntro;
