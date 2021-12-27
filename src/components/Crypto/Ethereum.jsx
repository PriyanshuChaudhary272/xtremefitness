import React from 'react'
import CryptoShiba from './CryptoShiba'
import img1 from '../Brands/brandsImg/Vector 23.svg';
// import triangle from './brandsImg/Vector 23.svg'
import logo from "./CryptoImgs/Group.png";
import img from './CryptoImgs/Group 3523.png'
const Ethereum = () => {
    return (
        <div>
            <CryptoShiba heading={<span> Grab Unlimited <br /> Free Ethereum </span>} para ={<span>Download the App to collect <br />
Rewards & WithdrawTether Ethereum</span>}back={img1} navText="Ethereum" navLogo ={logo} img ={img}/>
        </div>
    )
}

export default Ethereum
