import React, { useState, useRef } from 'react'
import arrow from './FaQimg/Vector 21.svg'
const Accoution = () => {
    const [content, setcontent] = useState("")
    const [contentHeight, setcontentHeight] = useState("0px")
    const show = useRef(null)
    const handleClick = () => {
        setcontentHeight(content === "faq-collapse-div-active" ? "0px" : `${show.current.scrollHeight}px`)
        setcontent(content === "" ? "faq-collapse-div-active" : "")
        console.log(contentHeight)
    }
    return (
        <div className='col-lg-6'>
            <div className={`faq-collapse-div p-4 m-4 ${content}`} onClick={handleClick}>
                <div className='d-flex justify-content-between'>
                    <h4 className='d-inline m-0'>How flytant works for influencers point of view?</h4>
                    <img className={`faq-arrow ${content === "" ? "" : "faq-arrow-active"}`} src={arrow} alt="" />
                </div>
                <div ref={show} style={{ height: `${contentHeight}` }} className={`faq-collapse-content`}>
                    <p className='mt-4 p-0'>This works in simple way when any influencers visit the flytant first of all we give bonus point and allow them to link social media.</p>
                </div>
            </div>
        </div>
    )
}

export default Accoution
