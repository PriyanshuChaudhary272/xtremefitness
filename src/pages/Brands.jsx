import React from 'react'
import Footer from '../components/Home/footer'
import Brandssubhero from '../components/Brands/Brandssubhero'
// import Collage from '../components/Brands/Collage'
import Collagecollection from '../components/Brands/Collagecollection'
import Soundinteresting from '../components/AboutUs/Soundinteresting'
const Brandspg = () => {
    return (
        <>
            <Brandssubhero/>
            <Collagecollection />
            <Soundinteresting link = "/"heading = "Sounds Interesting!" para= "Download the App and Post Your Campaign For Free." button= "Download Now"/>
            <p className='text-center my-5 or'>Or</p>
            <Soundinteresting newpage = "true"heading="Request a Demo!" para = "Schedule a Meet With Us before Getting Onboard." button="Schedule Meet" link="https://calendly.com/flytant"/>
            <div className='my-4' style={{height: "6rem"}}> </div>
            <Footer/>
        </>
    )
}

export default Brandspg
