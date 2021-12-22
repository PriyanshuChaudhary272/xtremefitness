import React from 'react'
import Brands from '../Brands/Brand'
import img1 from './influencers/unsplash_y-r3G6Mu8CM.png'
import img5 from './influencers/unsplash_VLPLo-GtrIE.png'
import img4 from './influencers/unsplash_v_90XPUIHRs.png'
import img2 from './influencers/unsplash_qqbMtduYEeU.png'
import img3 from './influencers/unsplash_oax79tdG-lU.png'
import Brandsub1 from '../Brands/Brandsub1'
import Brandsub2 from '../Brands/Brandsub2'
import Brandsub2reverse from '../Brands/Brandsub2reverse'
const Influencers = () => {
    return (
        <div>
            <Brands heading = "Flytant For Influencers" para = {<span>Get Sponsorships From Brands <br /> and Monetise Your Social Media Content</span>} img ={img1} />
            <Brandsub1 mainheading ="Advantages For Influencers" heading = "Directly Monetise" para = "Our platform helps you Connect with the Brands directly. You can Download the App and Message the Brands for Sponsorships." img = {img2} />
            <Brandsub2 heading = "Social Score" para = "The Quality of Your Content and how good is your Engagement is determined using Social Score. Higher the Social Score higher is your  Quality as an Influencer." img = {img3} />
            <Brandsub2reverse heading = "NO Spam" para = "Get Only Real Messages from Brands and No Spam in your inbox. We ensure quality brands connect you for Sponsorships." img = {img4} />
            <Brandsub2 heading = "Passive Income" para = "Get as many sponsorships as you want by connecting with the brands directly. We provide you one stop platform to monetise your Social Media as an Influencer." img = {img5} />
        </div>
    )
}

export default Influencers
