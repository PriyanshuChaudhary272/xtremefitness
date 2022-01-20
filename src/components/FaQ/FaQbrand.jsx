import React from 'react'
import Contacticons from '../Home/contacticons'
import Accoution from './Accoution'
import img from './FaQimg/quation.png'
import search from './FaQimg/eva_search-outline.png'

const FaQbrand = () => {
    return (
        <div>
            <div className="max-min mx-auto career faq-main-div">
                <div className='d-flex flex-column align-items-center'>
                    <h1 className='faq-main-heading text-center m-0'>POPULAR FAQs FOR BRANDS</h1>
                    <h3 className='faq-sub-heading text-center'>Hello Visitor! These are the most asked questions from inflluencers.</h3>
                    <form className='faq-search-div'>
                        <input type="text" className='d-inline faq-search p-4' placeholder='Type your question here' />
                        <img src={search} className="figure-img faq-search-img img-fluid rounded p-0 p-md-1 px-xl-3" alt="..." />
                    </form>
                </div>
                <div className="faq-questions row max-min2 mx-auto">
                    <Accoution />
                    <Accoution />
                    <Accoution />
                    <Accoution />
                    <Accoution />
                    <Accoution />
                    <Accoution />
                    <Accoution />
                </div>
                <div className='d-flex flex-column flex-sm-row justify-content-between faq-bottom max-min2 mx-auto p-5'>
                    <div>
                        <h3>Flytant is always here to help you ask any question</h3>
                        <p className='mt-3'>You will get all help from our team.</p>
                        <div className="contact faq-contact mt-5">
                            <a href='mailto:contact@flytant.com' className="btn btn-dark me-sm-5 mt-2 px-md-5 py-md-2 navbtn m-auto d-flex align-items-center">Contact Us</a>
                        </div>
                    </div>
                    <img src={img} className='fluid-img m-0 me-md-4' alt="" />
                </div>
            </div>
            <Contacticons />
        </div>
    )
}

export default FaQbrand
