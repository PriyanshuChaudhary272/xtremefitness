import React from 'react'
import dots from './brandsImg/Group 1660.png';
import blackdots from '../Home/images/black dots.png'
const Collage = (props) => {
    return (
        <div className='max-min mx-auto '>
            <div className="d-flex align-items-center justify-content-center  collage-row ">
                <div className="row brand-hero d-flex justify-content-between">
                    <div className="col d-flex align-items-center justify-content-center p-0 collage-dots ms-2 collage-header">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-11">
                                <h1 className='mb-4'>{props.heading}</h1>
                                <p>{props.para}</p>
                                <img src={dots} className='dotline' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex flex-column align-items-end justify-content-center">
                        <img src={blackdots} className='collage-dots' alt="" />
                    </div>
                </div>
            </div>
            <div className='collage d-flex flex-row flex-md-column'>
                <div className=" d-flex flex-column flex-md-row justify-content-end align-items-end">
                    <div className="">
                        <div className="collageimg6 m-2"><img src={props.img1} className='img-fluid' alt="" /></div>{/* top first */}
                    </div>
                    <div className="">
                        <div className="collageimg5 m-2"><img src={props.img2} className='img-fluid' alt="" /></div>{/* top third */}
                    </div>
                    <div className="">
                        <div className="collageimg3 m-2"><img src={props.img3} className='img-fluid' alt="" /></div>{/* top last */}
                    </div>
                </div>
                <div className="ro w d-flex flex-column flex-md-row justify-content-start align-items-end">
                    <div className="col">
                        <div className="collageimg7 m-2"><img src={props.img4} className='img-fluid' alt="" /></div>{/* bottom first */}
                    </div>
                    <div className="col">
                        <div className="collageimg4 m-2"><img src={props.img5} className='img-fluid' alt="" /></div>{/* bottom second */}
                    </div>
                    <div className="col">
                        <div className="collageimg2 m-2"><img src={props.img6} className='img-fluid' alt="" /></div>{/* bottom thirst */}
                    </div>
                    <div className="col">
                        <div className="collageimg1 m-2"><img src={props.img7} className='img-fluid' alt="" /></div>{/* bottom last */}
                    </div>
                </div>
                <div className='collage-backblack'></div>
            </div>
        </div>
    )
}

export default Collage
