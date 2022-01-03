import React from 'react'
import CryptoShiba from './CryptoShiba'
import img1 from './CryptoImgs/Btc.svg'
import logo from './CryptoImgs/Vector.png'
import img from './CryptoImgs/Group 3536.png'
const Btc = () => {
    return (
        <div>
            <CryptoShiba heading={<span>Grab Unlimited <br /> Free Bitcoin</span>} para ={<span>Download the App to collect <br />
Rewards & WithdrawTether Bitcoin</span>}back= {img1} navText="Bitcoin" navLogo ={logo} img ={img}/>
        </div>
    )
}

export default Btc
