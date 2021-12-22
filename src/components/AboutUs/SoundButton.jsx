import React from 'react'

const SoundButton = (props) => {
    return (
        <div className='d-flex justify-content-center my-5'>
            <a className='btn btn-dark rounded-pill px-5 py-3 my-2 my-md-5 joinus' target={props.newpage === "true"?"_blank":null} rel={props.newpage  === "true"?"noreferrer":null} href={props.link}>{props.button}</a>
        </div>
    )
}

export default SoundButton
