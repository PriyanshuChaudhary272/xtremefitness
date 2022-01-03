import React,{useState} from 'react'
import {useNavigate} from "react-router-dom";
import './Contact.css'
import Contactus from '../Home/contacticons'
import { setlogEvent } from '../../Utils/setlogEvent';

const Contact = () => {
    const navigate = useNavigate();
    const [details, setDetails] = useState({ask: "", name: "", email: ""});
    const [text, settext] = useState('')
    const [error, setError] = useState('')
    const onchange = (e) =>{
        setDetails({...details, [e.target.name]: e.target.value})
    }
    const handletext = (e) =>{
        settext(e.target.value)
    }
    const handlesubmit = async(e) =>{
        setlogEvent('Submit_Contact_Form', {page_title: '/contact'})
        e.preventDefault();
        // const response = await fetch('http://localhost:5000/sendmailContact',{
        const response = await fetch('https://flytant-1test-server.herokuapp.com/sendmailContact',{
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({ask: details.ask ,name: details.name, email: details.email, text: text})
        });
        const user = await response.json();
        var frm = document.getElementsByName('contact-form')[0];
        frm.reset();  // Reset all form data
        // console.log(user);
        if(user.success){
            navigate('/Contact')
            setError('true')
            console.log(user.success)
        }
        else{
            console.log(user.error);
            setError('false');
        }
    }
    return (
        <>
            <div>
                <div className="row d-flex justify-content-center career">
                    <img src='' className='aboutimg' alt="" />
                    <div className="col-sm-7 d-flex flex-column align-items-center mt-5 pt-5">
                        <div>
                            <h1 className='my-5 text-center'>How can we help you?</h1>
                            <h3 className='my-5 text-center'>Do you have a question or are you interested in working with us? Just fill out the form below</h3>
                        </div>
                    </div>
                    <div className="col-sm-7 mt-5  mb-md-5 pb-md-5">
                        {error === 'false' && <p className='text-center fs-4' style={{color: 'red'}}>Cannot submit!</p>}
                        {error === 'true' && <p className='text-center fs-4' style={{color: 'green'}}>Submitted! Thanks for your query.</p>}
                        <form name="contact-form" onSubmit={handlesubmit} encType="multipart/form-data" className='contactform'>
                            <input type="text" name='ask' onChange={onchange} className='contacttext mb-5' placeholder="i'd like to ask about..." required/>
                            <div className='d-flex flex-column flex-md-row justify-content-between mt-0 mt-md-4'>
                                <input type="text" name='name' className='formname' onChange={onchange} placeholder="Name" required/>
                                <input type="email" name='email' className='formname' onChange={onchange}  placeholder='Email' required/>
                            </div>
                            <textarea placeholder='Type Message Here' className='careertext' onChange={handletext} required/>
                            <button className='btn btn-dark rounded-pill my-5 px-5 careerbtn'>Submit</button>
                        </form>
                    </div>
                </div>
                <Contactus />
            </div>
        </>
    )
}

export default Contact;
