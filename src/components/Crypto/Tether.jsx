import React from 'react'
import CryptoShiba from './CryptoShiba'
import img1 from './CryptoImgs/tether.svg'
import logo from './CryptoImgs/Group 3534.png'
import img from './CryptoImgs/Group 3521.png'
const Tether = () => {
    return (
        <div>
            <CryptoShiba heading={<span> Grab Unlimited <br /> Free Tether </span>} para ={<span>Download the App to collect <br />
Rewards & Withdraw Tether USDT</span>} back= {img1}navText="Tether" navLogo ={logo} img ={img}/>
        </div>
    )
}

export default Tether
