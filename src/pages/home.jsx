import React from 'react'
import Navbar from '../components/Home/navbar'
import Hero from '../components/Home/hero'
import Subhero from '../components/Home/Subhero'
import Subhero2 from '../components/Home/subhero2'
import Subhero3 from '../components/Home/subhero3'
import Footer from '../components/Home/footer'
const home = () => {
    return (
        < div className='homepage'>
        <Navbar/>
        <Hero/>
        <Subhero/>
        <Subhero2/>
        <Subhero3/>
        <Footer />
        </ div>
    )
}

export default home;
