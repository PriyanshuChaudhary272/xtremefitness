import React, {useContext} from 'react'
import Highlightdiv from './Highlightdiv'
import { useNavigate } from 'react-router-dom'
import blogContext from '../../Context/Blogs/BlogContext'
const HighlightBlog = (props) => {
    const navigate = useNavigate();
    const context = useContext(blogContext);
    const {blog} = context;
    const handleClick = (i, id) => {
        navigate(`/blog/${id}`, {state: {index: i, blogs: blog}})
    }
    return (
        <div className='Highlight-blogs max-min2 mx-auto'>
            <div className='col-md-10 offset-md-1 px-md-5'>
                <div className="row p-0">
                    {/* <div className="col-lg-6 Highlight-blogs-div px-3 px-md-3">
                        <div className="">
                            <img className='img-fluid highlight-blog-img' src="https://images.unsplash.com/photo-1640007973870-deb7956b1d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                        </div>
                        <h3 className='ps-1 ps-md-3 mt-3 mt-md-5 highlight-title'>New Market Strategy for
                            Influencer Is becoming best  before Influencers Worth it?</h3>
                        <p className='ps-1 ps-md-3 mt-3 mt-md-3 highlight-para'>Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives. </p>
                        <div className="highlights-date-time d-flex justify-content-between mt-4 mt-lg-5">
                            <div className="carousel-date">
                                <p className='ps-1 ps-md-3 '>Dec 2, 2021</p>
                            </div>
                            <div className="carousel-readtime">
                                <p className='pe-5'>5 min read</p>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-6 Highlight-blogs-div px-3 px-md-3">
                        <div className="">
                            <img className='img-fluid highlight-blog-img' src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80" alt="" />
                        </div>
                        <h3 className='ps-1 ps-md-3 mt-3 mt-md-5 highlight-title'>New Market Strategy for
                            Influencer Is becoming best  before Influencers Worth it?</h3>
                        <p className='ps-1 ps-md-3 mt-3 mt-md-4 highlight-para'>Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives. </p>
                        <div className="highlights-date-time d-flex justify-content-between mt-4 mt-lg-5">
                            <div className="carousel-date">
                                <p className='ps-1 ps-md-3 '>Dec 2, 2021</p>
                            </div>
                            <div className="carousel-readtime">
                                <p className='pe-5'>5 min read</p>
                            </div>
                        </div>
                    </div> */}

                    {props.blogs.map(
                        (blog, i) =>
                            <div key={i} onClick={() => handleClick(i, blog.id)} className="col-lg-6 Highlight-blogs-div px-3 px-md-3" style={{cursor: "pointer"}}>
                                <Highlightdiv title={blog.title} creationDate={blog.creationDate} imageUrls={blog.imageUrls[0]} texts={blog.texts[1]} readTime={blog.readTime} />
                            </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HighlightBlog
