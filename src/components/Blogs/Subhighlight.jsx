import React from 'react'
import { timeConverter } from '../../Utils/datetime';

const Subhighlight = (props) => {
    return (
        <>
            {/* <div className="col-md-4">
                <div className="">
                    <img className='img-fluid highlight-blog-img Subhighlight-blog-img'  alt="" />
                </div>
                <h3 className='ps-1 mt-3 mt-md-4 highlight-title Subhighlight-title'></h3>
                <p className='ps-1 mt-3 mt-md-4 highlight-para Subhighlight-para'></p>
                <div className="highlights-date-time d-flex justify-content-between mt-4 mt-lg-5">
                    <div className="carousel-date">
                        <p className='ps-1 '></p>
                    </div>
                    <div className="carousel-readtime">
                        <p className='pe-4'></p>
                    </div>
                </div>
            </div> */}
            {/* <div className="col-md-6 col-lg-4 mt-2 px-3 "> */}
                <div className="">
                    <img className='img-fluid highlight-blog-img Subhighlight-blog-img' src={props.imageUrls}alt="" />
                </div>
                <h3 className='ps- 1 mt-3 mt-md-5 highlight-title Subhighlight-title'>{props.title}</h3>
                <p className='ps-1 mt-3 mt-md-2 highlight-para Subhighlight-para'>{props.texts}</p>
                <div className="highlights-date-time d-flex justify-content-between mt-4 mt-lg-4">
                    <div className="carousel-date">
                        <p className='ps-1'>{timeConverter(props.creationDate)}</p>
                    </div>
                    <div className="carousel-readtime">
                        <p className='pe-1'>{props.readTime} min read</p>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default Subhighlight;
