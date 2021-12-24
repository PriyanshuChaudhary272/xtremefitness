import React from 'react'
import { timeConverter } from '../../Utils/datetime'

const Highlightdiv = (props) => {
    return (
        <div className="col-lg-6 Highlight-blogs-div px-3 px-md-3">
            <div className="">
                <img className='img-fluid highlight-blog-img' src={props.imageUrls} alt="" />
            </div>
            <h3 className='ps-1 ps-md-3 mt-3 mt-md-5 highlight-title'>{props.title[0].slice(0,70)}...</h3>
            <p className='ps-1 ps-md-3 mt-3 mt-md-3 highlight-para'>{props.texts.slice(0,200)}...</p>
            <div className="highlights-date-time d-flex justify-content-between mt-4 mt-lg-5">
                <div className="carousel-date">
                    <p className='ps-1 ps-md-3 '>{timeConverter(props.creationDate)}</p>
                </div>
                <div className="carousel-readtime">
                    <p className='pe-5'>{props.readTime} min read</p>
                </div>
            </div>
        </div>
    )
}

export default Highlightdiv
