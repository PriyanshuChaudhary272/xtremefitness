import React from 'react'
import { setlogEvent } from '../../Utils/setlogEvent';
import { useLocation } from 'react-router-dom'
const Soundinteresting = (props) => {
    const location = useLocation();
    const handleClick = () => {
        if (location.pathname === '/influencers') {
            setlogEvent('Download_Now_Influencers', { page_title: '/influencers' });
        }
        else{
            setlogEvent(props.button === 'Download Now' ? 'Download_Now_Brands' : 'Schedule_Meet_Brands', { page_title: '/brands' });
        }
    }
return (
    <div className='greydiv mb-5'>
        <h2>{props.heading}</h2>
        <p className='mt-3'>{props.para}</p>
        {/* <a className='btn btn-dark rounded-pill px-5 py-3 mt-3 joinus' onClick={handleClick} target={props.newpage === "true" ? "_blank" : null} rel={props.newpage === "true" ? "noreferrer" : null} href={props.link}>{props.button}</a> */}
        <a className='btn btn-dark rounded-pill px-5 py-3 mt-3 joinus' onClick={handleClick} target="_blank" rel="noreferrer" href={props.link}>{props.button}</a>
    </div>
)
}

export default Soundinteresting
