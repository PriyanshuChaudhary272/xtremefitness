import React, {useEffect} from 'react'
import Navbar from '../components/Home/navbar'
import Hero from '../components/Home/hero'
import Subhero from '../components/Home/Subhero'
import Subhero2 from '../components/Home/subhero2'
import Subhero3 from '../components/Home/subhero3'
import Footer from '../components/Home/footer'
// import { setlogEvent } from '../Utils/setlogEvent'

const Home = () => {
    useEffect(() => {
        // setlogEvent("page_view",{page_title: "home"});
    }, [])
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

export default Home;
