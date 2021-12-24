import React, { useState, useEffect } from 'react'
import SoundButton from '../AboutUs/SoundButton'
import SubHighlightBlogs from './SubHighlightBlogs'
import blogContext from '../../Context/Blogs/BlogContext'
import { timeConverter } from '../../Utils/datetime'
import Subhighlight from './Subhighlight'
import Carousel from './Carousel'
const Blogs2 = (props) => {
    const { blogs, otherblogs } = props.state;
    const [para, setPara] = useState([])
    // convert texts array to a matrix of 2 colums for each row
    
    useEffect(() => {
        const prev = blogs.texts.reduce(function (prev, current, index) {
            return (index % 2 == 0 ? prev.push([current])
                : prev[prev.length - 1].push(current)) && prev;
        }, []);
        setPara(prev);
    }, [])
    return (
        <div className='blogs2 carousel-div max-min mx-auto'>
            {
                // console.log(caroblogs)
            }
            <div className='carousel-content col-md-10 offset-md-1 px-3 px-md-5 '>
                <div className="date-time">
                    <div className="carousel-readtime">
                        <p className='text-start m-0 p-0 pe-2 pe-xl-0'>{blogs.readTime} min read</p>
                    </div>
                    <div className="carousel-date">
                        <span><p className='text-start'>{timeConverter(blogs.creationDate)}</p></span>
                    </div>
                </div>
                <h1 >{blogs.title[0]}</h1>
                <div className='carousel-img-container'>
                    {blogs.imageUrls[0] && <img className='img-fluid carousel-img my-3 my-md-5' src={blogs.imageUrls[0]} alt="" />}
                </div>
                {para.map((para, i) =>
                    <div key={i}>
                        {blogs.title[i] && <h3 className='mb-4 mt-2 mt-md-5 mb-md-4 highlight-title'>{blogs.title[i]}</h3>}
                        {para[0] && <p className='highlight-para Blogs2-top-para '>{para[0]}</p>}
                        {para[1] && <p className='highlight-para Blogs2-top-para '>{para[1]}</p>}
                        <div className='carousel-img-container'>
                            {blogs.imageUrls[i + 1] && <img className='img-fluid carousel-img' src={blogs.imageUrls[i + 1]} alt="" />}
                        </div>
                    </div>
                )}
                {/* <p className='highlight-para Blogs2-para2 '>Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives. Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives. Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives.</p>
                <p className='highlight-para mb-5'>An upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives. Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. </p>
                {
                    <div className="row p-0">
                        <div className="col-lg-6 Highlight-blogs-div px-0 px-lg-3">
                            <img className='img-fluid highlight-blog-img' src="https://images.unsplash.com/photo-1640007973870-deb7956b1d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                        </div>
                        <div className="col-lg-6 Highlight-blogs-div px-0 px-lg-3">
                            <img className='img-fluid highlight-blog-img' src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80" alt="" />
                        </div>
                    </div>
                }
                <p className='highlight-para Blogs2-para2'>An upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives. Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. </p>
                <div className='carousel-img-container'>
                    <img className='img-fluid carousel-img' src="https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                </div> */}
                {/* <SoundButton button="Subscribe newsletter" /> */}

                <h3 className='p-0 mt-3 pt-5 mt-md-5 highlight-title Subhighlight-title'>More topics</h3>
            </div>
            <div className='Blogs2-bottom'>
                <SubHighlightBlogs blogs={otherblogs.slice(0,3)}/>
            </div>
            
        </div>
    )
}

export default Blogs2
