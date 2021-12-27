import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Home/footer'
import Navbar3 from '../components/Home/navbar3'
import Blogs2 from '../components/Blogs/Blogs2'
import './pages.css'
const Blog2pg = () => {
    return (
        <div>
            <Navbar3 />
            <Blogs2/>
            <div className='Go-back ms-auto m-4'>
                <Link to='/blogs' className='btn btn-dark rounded' style={{ backgroundColor: "black", borderBlockColor: "black" }}>Back</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Blog2pg
