import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Home/footer'
import Navbar3 from '../components/Home/navbar3'
import Blogs2 from '../components/Blogs/Blogs2'
import './pages.css'
const Blog2pg = () => {
    const { state } = useLocation();
    return (
        <div>
            <Navbar3 />
            <Blogs2 state={state} />
            <div className='Go-back ms-auto m-4'>
                <a href='/blogs' className='btn btn-dark rounded' style={{ backgroundColor: "black", borderBlockColor: "black" }}>Back</a>
            </div>
            <Footer />
        </div>
    )
}

export default Blog2pg
