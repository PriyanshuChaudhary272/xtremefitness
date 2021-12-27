import React from 'react'
import CryptoShiba from './CryptoShiba'
import img1 from './CryptoImgs/sandbox.svg';
import logo from "./CryptoImgs/Group 1260.png";
import img from './CryptoImgs/Group 3539 (1).png'
const Sandbox = () => {
    return (
        <div>
            <CryptoShiba heading={<span> Grab Unlimited <br /> Free Sandbox </span>} para ={<span>Download the App to collect <br />
Rewards & WithdrawTether Sandbox</span>}back={img1} navText="Ethereum" navLogo ={logo} img ={img}/>
        </div>
    )
}

export default Sandbox
