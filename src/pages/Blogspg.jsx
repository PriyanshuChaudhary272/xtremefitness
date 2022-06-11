import Footer from '../components/Home/footer'
import Navbar3 from '../components/Home/navbar3'
import Carousel from '../components/Blogs/Carousel'
import HighlightBlog from '../components/Blogs/HighlightBlog'
import SubHighlightBlogs from '../components/Blogs/SubHighlightBlogs'
import React, { useContext, useEffect, useState } from 'react'
import blogContext from '../Context/Blogs/BlogContext'
import Double from './Images/Infinity-2s-287px.gif'
import blogCarouselContext from '../Context/blogsCarousel/carouselContext'
import { auth } from "../firebase";
import { signInAnonymously } from "firebase/auth";
// import {useSelector, useDispatch} from 'react-redux'
// import Highlightdiv from '../components/Blogs/Highlightdiv'
import { setlogEvent } from '../Utils/setlogEvent'
const Blogspg = () => {
    // REDUX
    // const dispatch = useDispatch();
    // let count = useSelector(state => state)

    const context = useContext(blogContext);
    const { blog, readBlogs, paginateBlogs, last } = context;
    const [prev, setPrev] = useState();
    const [login, setLoggedIn] = useState(false)

    const context1 = useContext(blogCarouselContext);
    const { readCarousel } = context1;
    useEffect(() => {
        // REDUX
        // dispatch({type: "readblogs"});

        const getblogs = async () => {
            signInAnonymously(auth)
                .then(() => {
                    setLoggedIn(true)
                    if (blog.length === 0) {
                        readCarousel();
                        readBlogs();
                    }
                })
                .catch((error) => {
                    console.log('error')
                })
            // if (blog.length === 0) {
            //     await readCarousel();
            //     await readBlogs();
            // }
            // await addBlog();
        }
        getblogs();
        // eslint-disable-next-line
    }, [])

    const loadMore = async () => {
        // REDUX
        // dispatch({type: "paginate"});

        setlogEvent('Load_More_Blogs', { page_title: '/blogs' })
        paginateBlogs().then(() => setPrev(last))
        console.log(last)
    }
    const hideMore = () => {
        document.getElementsByClassName('Load-more-topics')[0].style.display = "none"
    }
    return (
        
        <div>
            <Navbar3 />
            {console.log(blog.length)}
            {
                (blog.length === 0 || !login) ?
                    <div className="mx-auto max-min2 d-flex justify-content-center">
                        <img src={Double} className='Loading' alt="" />
                    </div>
                    :
                    <>
                        <Carousel />
                        <HighlightBlog blogs={blog.slice(0, 2)} otherblogs={blog} />
                        <SubHighlightBlogs blogs={blog.slice(2, last)} />
                        <div className='d-flex justify-content-center my-5'>
                            <button className='btn btn-dark rounded-pill px-5 py-3 my-2 my-md-5 joinus Load-more-topics' onClick={async () => {
                                loadMore()
                                    .then(() => {
                                        if (prev === last) { hideMore() };
                                    })
                            }}>Load more topics</button>
                        </div>
                    </>
            }
            <Footer />
        </div>
    )
}

export default Blogspg
