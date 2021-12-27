import React,{useContext} from 'react'
import Subhighlight from './Subhighlight'
import { useNavigate } from 'react-router-dom'
import blogContext from '../../Context/Blogs/BlogContext'
const SubHighlightBlogs = (props) => {
    const navigate = useNavigate();
    const context = useContext(blogContext);
    const { blog } = context;
    const handleClick = (i, id) => {
        navigate(`/blog/${id}`, { state: { index: i+2, blogs: blog } })
    }
    return (
        <div className='SubHighlight-blogs max-min2 mx-auto'>
            <div className='col-md-10 offset-md-1 px-md-5'>
                <div className="row">
                    {/* create a map over fetched data a return the following div with appropriate assignment of data */}
                    {props.blogs.map(
                        (blog, i) =>
                            <div key={i} onClick={() => handleClick(i, blog.id)} className="col-md-6 col-lg-4 mt-2 px-3 " style={{cursor: "pointer"}}>
                                <Subhighlight key={i} title={blog.title[0].slice(0, 100)} creationDate={blog.creationDate} imageUrls={blog.imageUrls[0]} texts={blog.texts[0].slice(0, 150)} readTime={blog.readTime} />
                            </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default SubHighlightBlogs
