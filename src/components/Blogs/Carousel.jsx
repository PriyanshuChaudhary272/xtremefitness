import React from 'react'
import './Blogs.css'
// import right from './BlogsImgs/right.png'
// import left from './BlogsImgs/left.png'
const Carousel = () => {
    return (
        <div className='carousel-div max-min mx-auto'>
            <div className='carousel-content col-md-10 offset-md-1 px-3 px-md-5'>

                <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active carousel-scrollar" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className='carousel-scrollar' aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className='carousel-scrollar' aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <a href="/blogs2" className='carousel-div-link'>
                                <div className='carousel-img-container'>
                                    <img className='img-fluid carousel-img' src="https://images.unsplash.com/photo-1633113089635-115b38c66c49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                                </div>
                                <div className="carousel-details row mt-3 mt-md-5">
                                    <div className="carousel-title col-lg-10">
                                        <h3 className='pe-2 pe-md-4'>New Market Strategy for Influencer Is becoming best  before Influencers Worth it?</h3>
                                    </div>
                                    <div className="col-lg-2 p-0">
                                        <div className=" col-xl-8 carousel-date-time mt-4 mt-lg-0">
                                            <div className="carousel-readtime">
                                                <p className='text-end m-0'>5 min read</p>
                                            </div>
                                            <div className="carousel-date">
                                                <span><p className='text-end'>Dec 2, 2021</p></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href="/blogs2" className='carousel-div-link'>
                                <div className='carousel-img-container'>
                                    <img className='img-fluid carousel-img' src="https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                                </div>
                                <div className="carousel-details row mt-3 mt-md-5">
                                    <div className="carousel-title col-lg-10">
                                        <h3 className='pe-2 pe-md-4'>New dsf Market Strategy for Influencer Is becoming best  before Influencers Worth it?</h3>
                                    </div>
                                    <div className="col-lg-2 p-0">
                                        <div className=" col-xl-8 carousel-date-time mt-4 mt-lg-0">
                                            <div className="carousel-readtime">
                                                <p className='text-end m-0'>5 min read</p>
                                            </div>
                                            <div className="carousel-date">
                                                <span><p className='text-end'>Dec 2, 2021</p></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href="/blogs2" className='carousel-div-link'>
                                <div className='carousel-img-container'>
                                    <img className='img-fluid carousel-img' src="https://images.unsplash.com/photo-1638913662252-70efce1e60a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                                </div>
                                <div className="carousel-details row mt-3 mt-md-5">
                                    <div className="carousel-title col-lg-10">
                                        <h3 className='pe-2 pe-md-4'>New sdf Market Strategy for Influencer Is becoming best  before Influencers Worth it?</h3>
                                    </div>
                                    <div className="col-lg-2 p-0">
                                        <div className=" col-xl-8 carousel-date-time mt-4 mt-lg-0">
                                            <div className="carousel-readtime">
                                                <p className='text-end m-0'>5 min read</p>
                                            </div>
                                            <div className="carousel-date">
                                                <span><p className='text-end'>Dec 2, 2021</p></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>
            </div>

        </div>
    )
}

export default Carousel
