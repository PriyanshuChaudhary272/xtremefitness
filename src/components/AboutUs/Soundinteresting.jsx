import React from 'react'

const Soundinteresting = (props) => {
    return (
        <div className='greydiv mb-5'>
            <h2>{props.heading}</h2>
            <p className='mt-3'>{props.para}</p>
            <a className='btn btn-dark rounded-pill px-5 py-3 mt-3 joinus' target={props.newpage === "true"?"_blank":null} rel={props.newpage  === "true"?"noreferrer":null} href={props.link}>{props.button}</a>
        </div>
    )
}

export default Soundinteresting
