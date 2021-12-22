import React, { useState } from 'react'
import './Career.css'
import img from './career/undraw_Hire_re_gn5j 1 (2).png'
import Contactus from '../Home/contacticons'
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase';
const Career = () => {
    const [progress, setprogress] = useState(0)
    const navigate = useNavigate();
    const [details, setDetails] = useState({ ask: "", name: "", email: "" });
    const [text, settext] = useState('')
    const [error, setError] = useState('')
    const onchange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }
    const handletext = (e) => {
        settext(e.target.value)
    }
    let f;
    const handlefile = (e) => {
        e.preventDefault();
        f = e.target.files[0];
    }
    const uploadFiles = async (file) => {
        if (!file) {
            setError('false');
            return;
        }
        const storageRef = ref(storage, `/files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on("state_change", (snapshot) => {
            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setprogress(prog)
        }, (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(async (url) => {
                        console.log(url);
                        // console.log(fl);
                        // const response = await fetch('http://localhost:5000/sendmailCareer', {
                        const response = await fetch('https://flytant-1test-server.herokuapp.com/sendmailCareer', {
                            method: 'POST',
                            headers: {
                                "Content-Type": 'application/json',
                            },
                            body: JSON.stringify({ ask: details.ask, name: details.name, email: details.email, text: text, url: url }),

                        });
                        var frm = document.getElementsByName('contact-form')[0];
                        frm.reset();  // Reset all form data
                        const user = await response.json();
                        setprogress(0)
                        // console.log(user);
                        if (user.success) {
                            navigate('/Career')
                            setError('true')
                        }
                        else {
                            setError('false');
                        }
                    }
                    )
            }
        );
    }
    // function handleClick() {
    //     // Get the first form with the name
    //     // Usually the form name is not repeated
    //     // but duplicate names are possible in HTML
    //     // Therefore to work around the issue, enforce the correct index
    //     var frm = document.getElementsByName('contact-form')[0];
    //     frm.reset();  // Reset all form data
    //     return false; // Prevent page refresh
    //  }
    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(f);
        await uploadFiles(f)
    }
    return (
        <>
            <div>
                <div className="row d-flex justify-content-center career">
                    <img src='' className='aboutimg' alt="" />
                    <div className="col-sm-7 d-flex flex-column align-items-center mt-5 pt-5">
                        <div className='career-img d-flex justify-content-center'>
                            <img src={img} className='mb-5 img-fluid' alt="" />
                        </div>
                        <div>
                            <h1 className='my-5 text-center'>We're Hiring</h1>
                            <h3 className='my-5 text-center'>Leave us a message. We’ll contact you soon</h3>
                        </div>
                    </div>
                    <div className="col-sm-7 col-md-10 col-lg-7 mt-5  mb-md-5 pb-md-5">
                        {error === 'false' && <p className='text-center fs-4' style={{ color: 'red' }}>Cannot submit!</p>}
                        {error === 'true' && <p className='text-center fs-4' style={{ color: 'green' }}>Submitted! Thanks for showing your interest.</p>}
                        <form name="contact-form" onSubmit={handlesubmit} className='contactform ' encType="multipart/form-data">
                            <div className='d-flex flex-column flex-md-row ml-5 ml-md-0'>
                                <label htmlFor="name"> </label>
                                <input type="text" name='name' className='formname' placeholder='Name' onChange={onchange} required />
                                <label htmlFor="email"> </label>
                                <input type="email" name='email' className='formname ms-auto' placeholder='Email' onChange={onchange} required />
                            </div>
                            <textarea placeholder='Type Message Here' className='careertext' onChange={handletext} required />
                            {/* {progress !== 0 && <p htmlFor="" className='mb-0'>{`Uploading ${progress}%`}</p>} */}
                            <input onChange={handlefile} className="form-control form-control-lg careertext inputfile" id="formFileLg" type="file" required></input>
                            {progress !== 0 &&
                                <div>
                                    <div class="progress progress-bar bg-success" style={{ width: `${progress}%` }}>
                                        <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                    </div>
                                    <p>uploading...</p>
                                </div>
                            }
                            <button className='btn btn-dark rounded-pill my-5 px-5 careerbtn'>Submit</button>
                        </form>
                    </div>
                </div>
                <Contactus />
            </div>
        </>
    )
}

export default Career;
