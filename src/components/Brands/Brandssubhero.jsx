import React from 'react'
import Brandsub2 from './Brandsub2'
import Brandsub2reverse from './Brandsub2reverse'
import imgleft from './brandsImg/unsplash_bMMOBVp6KQU.png'
import Brands from './Brand'
import Brandsub1 from './Brandsub1'
import img1 from './brandsImg/night-city-beautiful-woman-among-red-lights 22.png'
import img2 from './Brandmainimg/unsplash_37uZlXLYpGo.png'
import img3 from './Brandmainimg/unsplash_hLP7lVm4KUE.png'
import img4 from './Brandmainimg/unsplash_P9BHbcYCqx4.png'
import img6 from './Brandmainimg/unsplash_acU4Q2YEObQ.png'
import img5 from './Brandmainimg/unsplash_SxAw9-H7kCI.png'
const Brandssubhero = () => {
    return (
        <div>
            <Brands heading ={<span> Flytant <br /> For Brands</span>} para = {<span>Post your Campaign and Find <br/> the Most Felicitous Influencer For Your <br /> Brand. Download the App to Get Started.</span>}  img = {img1} />
            <Brandsub1 mainheading ="Advantages For Brands" heading ="Transparency" para = "Unlike Agencies we do not overcharge. There is complete transparency in choosing influencers and how much you have to pay them. You can also connect with Influencers directly for your campaign." img = {imgleft} />
            <Brandsub2 heading = "Engagement Rates" para = "View the Engagement rates of Influencers in all niches and Choose Influencers accordingly. Get quality influencers with high engagement rates for your campaigns." img = {img2}/>
            <Brandsub2reverse heading = "Social Score" para = {<span> The influencers Social Score helps you to determine the quality they possess and how good an Influencer is in contrast to other Influencers.</span>}  img = {img3} />
            <Brandsub2 heading = "Payment Rates" para = "Get Suggested Payment Rates For Influencers based on their Engagement and Social Score. This avoids overpayment and ensures Influencers producing Quality Content are paid. " img = {img4}/>
            <Brandsub2reverse heading = "Search Engine" para = "You Can Find Influencers in specific categories or from specific places using our Social Search Engine. We make it hassle free for Brands to search Influencers for their Campaign." img = {img5} />
            <Brandsub2 heading = "Influencers Presence" para = "As a Brand you can find Influencers who are present on all social media Platforms like Instagram, Youtube, Twitter, Facebook, TikTok, LinkedIn and many more." img = {img6}/>
        </div>
    )
}

export default Brandssubhero
