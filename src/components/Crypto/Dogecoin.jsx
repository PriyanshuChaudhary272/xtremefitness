import React from 'react'
import CryptoShiba from './CryptoShiba'
import img1 from './CryptoImgs/dogecoin.svg'
import logo from './CryptoImgs/Group 717.png'
import img from './CryptoImgs/Group 3537.png'
const Dogecoin = () => {
    return (
        <div>
            <CryptoShiba heading={<span> Grab Unlimited <br /> Free Dogecoin </span>} para ={<span>Download the App to collect <br />
Rewards & Withdraw Dogecoin</span>} back= {img1} back={img1} navText="Bitcoin" navLogo ={logo} img ={img}/>
        </div>
    )
}

export default Dogecoin
