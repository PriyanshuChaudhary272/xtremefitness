import React from 'react'
import SoundButton from '../AboutUs/SoundButton'
import SubHighlightBlogs from './SubHighlightBlogs'

// useEffect(() => {
//     effect
//     return () => {
//         cleanup
//     }
// }, [input])
const Blogs2 = () => {
    return (
        <div className='blogs2 carousel-div max-min mx-auto'>
            <div className='carousel-content col-md-10 offset-md-1 px-3 px-md-5 '>
                <div className="date-time">
                    <div className="carousel-readtime">
                        <p className='text-start m-0 p-0 pe-2 pe-xl-0'>5 min read</p>
                    </div>
                    <div className="carousel-date">
                        <span><p className='text-start'>Dec 2, 2021</p></span>
                    </div>
                </div>
                <h1 >New Market Strategy for Influencer Is becoming best  before Influencers Worth it?</h1>
                <p className='highlight-para Blogs2-top-para '>Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives. Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives. Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives. </p>
                <div className='carousel-img-container'>
                    <img className='img-fluid carousel-img' src="https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                </div>
                <p className='highlight-para Blogs2-para2 '>Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives. Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives. Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives.</p>
                <h3 className='mb-4 mb-md-4 highlight-title'>New Market Strategy for Influencer Is becoming best  before Influencers Worth it?</h3>
                <p className='highlight-para mb-5'>An upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives. Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. </p>
                <div className="row p-0">
                    <div className="col-lg-6 Highlight-blogs-div px-0 px-lg-3">
                        <img className='img-fluid highlight-blog-img' src="https://images.unsplash.com/photo-1640007973870-deb7956b1d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                    </div>
                    <div className="col-lg-6 Highlight-blogs-div px-0 px-lg-3">
                        <img className='img-fluid highlight-blog-img' src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80" alt="" />
                    </div>
                </div>
                <p className='highlight-para Blogs2-para2'>An upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives. Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. </p>
                <div className='carousel-img-container'>
                    <img className='img-fluid carousel-img' src="https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                </div>
                <SoundButton button="Subscribe newsletter" />

                <h3 className='p-0 m-0 highlight-title Subhighlight-title'>More topics</h3>
            </div>
            <div className='Blogs2-bottom'>
                <SubHighlightBlogs />
            </div>
        </div>
    )
}

export default Blogs2
