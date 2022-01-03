import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Blogs.css'
import { timeConverter } from '../../Utils/datetime'
import { useContext } from 'react'
import blogCarouselContext from '../../Context/blogsCarousel/carouselContext'
import { setlogEvent } from '../../Utils/setlogEvent'
// import right from './BlogsImgs/right.png'
// import left from './BlogsImgs/left.png'
const Carousel = () => {
    const navigate = useNavigate();

    const context1 = useContext(blogCarouselContext);
    const { carousel } = context1;
    const handleClick = (i, id) => {
        setlogEvent('Slider_Blog', { page_title: '/blogs' })
        navigate(`/blog/${id}`, { state: { index: i, blogs: carousel } })
    }
    const handlebtns = (i) =>{
        if(i === 'prev'){
            setlogEvent('Slider_Prev', { page_title: '/blogs' })
        }
        else{
            setlogEvent('Slider_Next', { page_title: '/blogs' })
        }
    }
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/blogs') {
            document.getElementsByClassName('carousel-div')[0].style.cursor = "pointer"
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div className='carousel-div max-min2 mx-auto'>
            <div className='carousel-content col-md-10 offset-md-1 px-3 px-md-5'>
                {/* {props.blogs.length > 1 ?
                <>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="carousel-scrollar" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="active carousel-scrollar" aria-current="true" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className='carousel-scrollar' aria-current="true" aria-label="Slide 3"></button>
                    </div>
                </>
                :
                null
                } */}
                <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {carousel.map(
                            (blog, i) =>
                                    <div className={`carousel-item ${i === 0 ? "active" : ""} pb-5`} key={i}>
                                        {/* <a href="/" className='carousel-div-link' key={i} > */}
                                        <div className='carousel-img-container' onClick={() => handleClick(i, blog.id)}>
                                            <img className='img-fluid carousel-img' src={blog.imageUrls[0]} alt="" />
                                        </div>
                                        <div className="carousel-details row mt-3 mt-md-5">
                                            <div className="carousel-title col-lg-10">
                                                <h3 className='pe-2 pe-md-4'>{blog.title[0].slice(0, 90)}</h3>
                                            </div>
                                            <div className="col-lg-2 p-0">
                                                <div className=" col-xl-8 carousel-date-time mt-4 mt-lg-0">
                                                    <div className="carousel-readtime">
                                                        <p className='text-end m-0'>{blog.readTime} min read</p>
                                                    </div>
                                                    <div className="carousel-date">
                                                        <span><p className='text-end'>{timeConverter(blog.creationDate)}</p></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* </a> */}
                                    </div>
                        )}
                    </div>
                    {carousel.length > 1 ?
                        <>
                            <button onClick={() =>{handlebtns('prev')}} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button onClick={() =>{handlebtns('next')}} className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </>
                        :
                        null
                    }
                </div>
            </div>

        </div>
    )
}

export default Carousel
