import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./brandcontact.css"
// import { setlogEvent } from '../../Utils/setlogEvent';
import tick from './Images/Group 1687.png'
require('dotenv').config();

const ProgressBar = (props) => {
    const [style, setStyle] = useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `100%`
        }

        setStyle(newStyle);
    }, 200);

    return (
        <div>
            <div class="progress progress-bar bg- brand-progress-bar " style={style}>
                <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
            <p className='m-2'>{props.message}. . .</p>
        </div>
    )
}
const BrandsContact = () => {
    const navigate = useNavigate();
    const [details, setDetails] = useState({ name: "", email: "", brandname: "", contact: "", code: "91" });
    const [text, settext] = useState('')
    const [Sumitted, setSumitted] = useState(false);
    const [error, setError] = useState('')
    const [progress, setProgress] = useState(false);
    const onchange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }
    const handletext = (e) => {
        settext(e.target.value)
    }
    const handlesubmit = async (e) => {
        // setlogEvent('Submit_Contact_Form', { page_title: '/contact' })
        setProgress(true)
        e.preventDefault();
        const response = await fetch("http://localhost:5000/sendmailBrandsContact", {
        // const response = await fetch(process.env.REACT_APP_BRAND_CONTACT_URL || "http://localhost:5000/sendmailBrandsContact", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({ name: details.name, email: details.email, brandname: details.brandname, contact: details.contact, message: text, code: details.code })
        });
        const user = await response.json();
        var frm = document.getElementsByName('contact-form')[0];
        frm.reset();  // Reset all form data
        // console.log(user);
        if (user.success) {
            navigate('/brandscontact')
            setError('true')
            setSumitted(true);
            console.log(user.success)
        }
        else {
            console.log(user.error);
            setError('false');
        }
    }
    return (
        <div className='max-min-brands-contact mx-auto brandcontact-div'>
            {
                Sumitted === true ?
                    <div className='brandcontact-submitted brandcontact-div d-flex flex-column align-items-center justify-content-center'>
                        <img src={tick} alt="" className='img-fluid brandcontact-tick' />
                        <p className='mt-2'>Thank You for Submitting!</p>
                        <h4 className='mt-5'>You can Schedule a Meet</h4>
                        <div className='d-flex justify-content-center mb-5'>
                            <a className='btn btn-dark rounded-pill px-5 py-3 my-2 mb-5 joinus' target="_blank" rel="noreferrer" href="https://calendly.com/flytant">Schedule Meet</a>
                        </div>
                    </div>
                    :
                    <div className="row">
                        <div className="col-lg-5 p-0 mx-auto brandcontact-left-img d-flex align-items-end justify-content-center">
                            <div className="div m-4 m-lg-5">
                                <h1 className='text-center'>Promote Your Brand with Top Influencers</h1>
                                <p className='text-center'>Get Maximum Sales for Your Product with Flytant</p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="col-sm-7 mt-5 mx-auto">
                                {error === 'false' && <p className='text-center fs-4' style={{ color: 'red' }}>Cannot submit!</p>}
                                {error === 'true' && <p className='text-center fs-4' style={{ color: 'green' }}>Submitted! Thanks for your query.</p>}
                                <h3 className='mb-5'>Brand Details</h3>
                                <form name="contact-form" onSubmit={handlesubmit} encType="multipart/form-data" className='contactform'>
                                    <label htmlFor="">Name</label>
                                    <input type="text" name='name' onChange={onchange} className='brandcontact-form ps-1 ps-md-2 mb-4 mb-lg-5' placeholder="" required />

                                    <label htmlFor="">Email</label>
                                    <input type="text" name="email" onChange={onchange} className='brandcontact-form ps-1 ps-md-2 mb-4 mb-lg-5' placeholder="" required />

                                    <label htmlFor="">Brand Name</label>
                                    <input type="text" name='brandname' onChange={onchange} className='brandcontact-form ps-1 ps-md-2 mb-4 mb-lg-5' placeholder="" required />
                                    <label htmlFor="">Contact Number</label>
                                    <div className="row">
                                        <div className="col-3 p-0">
                                            <input type="number" name='code' max={999} onChange={onchange} className='brandcontact-form ps-1 ps-md-2 mb-4 mb-lg-5' defaultValue={91} required />
                                        </div>
                                        <div className="col-9 pe-0">
                                            <input type="tel" pattern="[0-9]{10}" name='contact' maxlength="13" onChange={onchange} className='brandcontact-form ps-1 ps-md-2 mb-4 mb-lg-5' placeholder="" required />
                                        </div>
                                    </div>
                                    <label htmlFor="">Message</label>
                                    <textarea placeholder='' className='careert ext brandcontact-form ps-1 ps-md-2' onChange={handletext} required />
                                    {progress &&
                                        <ProgressBar message = "Sending"/>
                                    }
                                    <button className='btn btn-dark py-2 my-5 px-5 brandcontact-btn'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>}
        </div>
    );
};

export default BrandsContact;
