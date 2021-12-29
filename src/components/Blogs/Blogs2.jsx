import React, { useState, useEffect } from 'react'
import SoundButton from '../AboutUs/SoundButton'
import SubHighlightBlogs from './SubHighlightBlogs'
import { timeConverter } from '../../Utils/datetime'
import { useLocation, useParams } from 'react-router-dom'
import { db } from '../../firebase'
import Double from '../../pages/Images/Infinity-2s-287px.gif'
import { doc, getDoc } from "firebase/firestore";
function Blogs2() {
    // const { blogs, otherblogs } = props.state;
    const { id } = useParams();
    const { state } = useLocation();
    const location = useLocation();
    // SETTING CONTEXT
    const [para, setPara] = useState([])
    const [blog, setBlog] = useState();
    const [bottom, setBottom] = useState([])
    const [show, setShow] = useState(true)
    // convert texts array to a matrix of 2 colums for each row
    useEffect(() => {
        const createarr2 = () => {
            const docRef = doc(db, "blogs", `${id}`);
            getDoc(docRef)
                .then(data => {
                    setBlog(data.data());
                    // const prev = data.data().texts.reduce(function (prev, current, i) {
                    //     return (i % 2 == 0 ? prev.push([current])
                    //         : prev[prev.length - 1].push(current)) && prev;
                    // }, [])
                    setPara(data.data().texts);
                })
            setShow(false)
        }
        const createarr = () => {
            const { index, blogs } = state;
            setBlog(blogs[index])
            setPara(blogs[index].texts)
            setBottom(blogs);
            // prev = blogs[index].texts.reduce(function (prev, current, i) {
            //     return (i % 2 == 0 ? prev.push([current])
            //         : prev[prev.length - 1].push(current)) && prev;
            // }, []);
        }
        if (!state) {
            createarr2();
        }
        else {
            createarr();
            // console.log(b)
            // setPara(prev)
        }
    }, [location.pathname])
    return (

        <>
            {
                blog === undefined ?
                    <div className="mx-auto max-min2 d-flex justify-content-center">
                        <img src={Double} className='Loading' alt="" />
                    </div>
                    :
                    <div className='blogs2 carousel-div max-min2 mx-auto'>
                        <div className='carousel-content col-md-10 offset-md-1 px-3 px-md-5 '>
                            <div className="date-time">
                                <div className="carousel-readtime">
                                    <p className='text-start m-0 p-0 pe-2 pe-xl-0'>{blog.readTime} min read</p>
                                </div>
                                <div className="carousel-date">
                                    <span><p className='text-start'>{timeConverter(blog.creationDate)}</p></span>
                                </div>
                            </div>
                            <h1 >{blog.title[0]}</h1>
                            <div className='carousel-img-container'>
                                {blog.imageUrls[0] && <img className='img-fluid carousel-img my-3 my-md-5' src={blog.imageUrls[0]} alt="" />}
                            </div>
                            {<p className='highlight-para Blogs2-top-para '>{para[0]}</p>}
                            {blog.texts.map((para, i) => {
                                if (i !== 0) {
                                    return <div key={i}>
                                        {blog.title[i] && <h3 className='mb-4 mt-2 mt-md-5 mb-md-4 highlight-title'>{blog.title[i]}</h3>}
                                        {para && <p className='highlight-para Blogs2-top-para '>{para}</p>}
                                        <div className='carousel-img-container'>
                                            {(i != 0 && i%3 == 0 && blog.imageUrls[i/3]) && <img className='img-fluid carousel-img' src={blog.imageUrls[i/3]} alt="" />}
                                        </div>
                                        {/* {para[1] && <p className='highlight-para Blogs2-top-para '>{para[1]}</p>} */}
                                    </div>
                                }
                            }
                            )}

                            {show && <h3 className='p-0 mt-3 pt-5 mt-md-5 highlight-title Subhighlight-title'>More topics</h3>}
                        </div>
                        <div className='Blogs2-bottom'>
                            {<SubHighlightBlogs blogs={show ? bottom : []} />}
                        </div>

                    </div>
            }
        </>
    )
}
// 
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
{/* <SoundButton button="Subscribe newsletter" /> */ }
export default Blogs2
