import React from 'react'
import Subhighlight from './Subhighlight'
const SubHighlightBlogs = (props) => {
    return (
        <div className='SubHighlight-blogs max-min mx-auto'>
            <div className='col-md-10 offset-md-1 px-md-5'>
                <div className="row">
                    {/* create a map over fetched data a return the following div with appropriate assignment of data */}
                    {props.blogs.map(
                        (blog, i) =>
                            <Subhighlight key={i} title = {blog.title[0].slice(0,100)} creationDate = {blog.creationDate} imageUrls = {blog.imageUrls[0]} texts = {blog.texts[0].slice(0,150)} readTime = {blog.readTime}/>
                    )}
                </div>
            </div>
        </div >
    )
}

export default SubHighlightBlogs
