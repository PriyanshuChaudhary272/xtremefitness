import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Home/footer'
import Navbar3 from '../components/Home/navbar3'
import Blogs2 from '../components/Blogs/Blogs2'
import Double from './Images/Infinity-2s-287px.gif'
import { auth } from "../firebase";
import { onAuthStateChanged } from 'firebase/auth'
import './pages.css'
const Blog2pg = () => {
    const [login, setLoggedIn] = useState(false)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true)     
            }
        });
    }, [])
    return (
        <div>
            <Navbar3 />
            {
                !login ? 
                <div className="mx-auto max-min2 d-flex justify-content-center">
                    <img src={Double} className='Loading' alt="" />
                </div>
                :
                <Blogs2 />
            }
            <div className='Go-back ms-auto m-4'>
                <Link to='/blogs' className='btn btn-dark rounded' style={{ backgroundColor: "black", borderBlockColor: "black" }}>Back</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Blog2pg
