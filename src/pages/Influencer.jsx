import React from 'react'
import Footer from '../components/Home/footer'
import Influencers from '../components/Influencers/Influencers'
import Soundinteresting from '../components/AboutUs/Soundinteresting'
import Collagecollectioninflu from '../components/Brands/Collagecollectioninflu'
const Influencerpage = () => {
    return (
        <div>
            <Influencers />
            <Collagecollectioninflu />
            <Soundinteresting newpage="false" link = "/" heading="Want to Get Sponsored?" para = "Download the App and Get Sponsorships." button="Download Now"/>
            <div className='my-4' style={{height: "6rem"}}> </div>
            <Footer/>
        </div>
    )
}

export default Influencerpage
