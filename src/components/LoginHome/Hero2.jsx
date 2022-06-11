import React from 'react'
import './common2.css'
import img from './Images2/Rectangle 1455.png'
import search from './Images2/bi_search.svg'
const Hero2 = () => {
    return (
        <div className='hero2-div'>
            <div className=' max-min mx-auto'>
                <div className="row">
                    <div className="col-7 d-flex flex-column justify-content-center ps-md-5">
                        <h1>Find Influencers & Brands <br /> for collaboration</h1>
                        <form className='hero2-input-div d-flex justify-content-between align-items-center mt-4'>
                            <img src={search} className="mx-4" alt="..." />
                            <input type="text" className='' placeholder='Try ‘Brand name or Top influencers' />
                            <span style={{ cursor: "pointer" }} className='hero2-input-Search-text px-5 d-flex align-items-center'>Search</span>
                        </form>
                        <div className="hero2-popular-div mt-4 ">
                            <ul className='d-flex p-0'>
                                <span>Popular :</span>
                                <li className='mx-2'><span className='hero2-popular-li p-1 px-2'>Top Influecners</span></li>
                                <li className='mx-2'><span className='hero2-popular-li p-1 px-2'>Fashion bloggers</span></li>
                                <li className='mx-2'><span className='hero2-popular-li p-1 px-2'>Fashion bloggers</span></li>
                            </ul>
                        </div>
                        <ul></ul>
                    </div>
                    <div className="col-5 p-0">
                        <img src={img} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2
