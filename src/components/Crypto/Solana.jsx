import React from 'react'
import CryptoShiba from './CryptoShiba'
import img1 from './CryptoImgs/Solana.svg'
import logo from './CryptoImgs/Group 1261.png'
import img from './CryptoImgs/Group 3538.png'
const Solana = () => {
    return (
        <div>
            <CryptoShiba heading={<span> Grab Unlimited <br /> Free Solana </span>} para ={<span>Download the App to collect <br />
Rewards & WithdrawTether Solana</span>} back= {img1} navText="Tether" navLogo ={logo} img ={img}/>
        </div>
    )
}

export default Solana
