import React from 'react'
import Footer from '../components/Home/footer'
// import Brandssubhero from '../components/Brands/Brandssubhero'
import Brands from '../components/Brands/Brand'

// import Collage from '../components/Brands/Collage'
// import Collagecollection from '../components/Brands/Collagecollection'
// import Soundinteresting from '../components/AboutUs/Soundinteresting'
import Brandsub1 from '../components/Brands/Brandsub1'
import Brandsub2 from '../components/Brands/Brandsub2'
const Brandspg = () => {
    return (
        <>
            <Brands heading="EQUIPMENTS" para="Get training From best trainers out there." img='https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' />
            {/* <Brandssubhero /> */}
            <Brandsub1/>
            <Brandsub2/>
            {/* <Collagecollection /> */}
            {/* <Soundinteresting link = "/"heading = "Sounds Interesting!" para= "Download the App and Post Your Campaign For Free." button= "Download Now"/>
            <p className='text-center my-5 or'>Or</p>
            <Soundinteresting newpage = "true"heading="Request a Demo!" para = "Schedule a Meet With Us before Getting Onboard." button="Schedule Meet" link="https://calendly.com/flytant"/>
            <div className='my-4' style={{height: "6rem"}}> </div> */}
            <Footer/>
        </>
    )
}

export default Brandspg
