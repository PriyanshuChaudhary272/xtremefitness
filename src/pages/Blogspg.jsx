import Footer from '../components/Home/footer'
import Navbar3 from '../components/Home/navbar3'
import Carousel from '../components/Blogs/Carousel'
import HighlightBlog from '../components/Blogs/HighlightBlog'
import SubHighlightBlogs from '../components/Blogs/SubHighlightBlogs'
import React, { useContext, useEffect } from 'react'
import blogContext from '../Context/Blogs/BlogContext'
import Double from './Images/Infinity-2s-287px.gif'
import blogCarouselContext from '../Context/blogsCarousel/carouselContext'
const Blogspg = () => {
    const context = useContext(blogContext);
    const { blog, addBlog, readBlogs, paginateBlogs, last } = context;

    const context1 = useContext(blogCarouselContext);
    const { carousel, readCarousel } = context1;
    useEffect(() => {
        const getblogs = async () => {
            await readCarousel();
            await readBlogs();
            // await addBlog();
        }
        getblogs();
        // eslint-disable-next-line
    }, [])
    const loadMore = async () => {
        await paginateBlogs()
    }
    return (
        <div>
            <Navbar3 />
            {
                blog.length === 0 || carousel.length === 0?
                    <div className="mx-auto max-min d-flex justify-content-center">
                        <img src={Double} className='Loading' alt="" />
                    </div>
                    :
                    <>
                        <Carousel blogs={carousel} otherblogs = {blog.slice(0,10)} />
                        <HighlightBlog blogs={blog.slice(0, 2)} />
                        <SubHighlightBlogs blogs={blog.slice(2, last)} />
                        <div className='d-flex justify-content-center my-5'>
                            <button className='btn btn-dark rounded-pill px-5 py-3 my-2 my-md-5 joinus' onClick={loadMore}>Load more topics</button>
                        </div>
                    </>
            }
            <Footer />
        </div>
    )
}

export default Blogspg
