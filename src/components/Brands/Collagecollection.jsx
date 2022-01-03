import React from 'react'
import Collage from './Collage'
import Collagereverse from './Collagereverse'
import img1 from './brandsImg/unsplash_y9HsMX3-mUY.png'
import img2 from './brandsImg/unsplash_dPQ6gZBUYIY.png'
import img3 from './brandsImg/unsplash_EOoO4KTZdmk.png'
import img4 from './brandsImg/unsplash_fkXB7CMDbuY.png'
import img5 from './brandsImg/unsplash_hlg-ltdCoI0.png'
import img6 from './brandsImg/unsplash_MvMfKaVBN-c.png'
import img7 from './brandsImg/unsplash_qLx7HUohz04.png'
// first

import img21 from './brandsImg/unsplash_zW7hVlt6Oa0.png'
import img22 from './brandsImg/unsplash_YKcKLhuhUVk.png'
import img23 from './brandsImg/unsplash_rg5v1ywp6Jo.png'
import img24 from './brandsImg/unsplash_D0F8ulj7hds.png'
import img25 from './brandsImg/unsplash_BQMZ5ligqps.png'
import img26 from './brandsImg/unsplash_3eebt4Xsg_c.png'
import img27 from './brandsImg/unsplash__FmIInjJ_FY.png'
// second

import img31 from './vlogimg/unsplash_9TYryqt3wLk.png'
import img32 from './vlogimg/unsplash_XZNG4Px0PU8.png'
import img33 from './vlogimg/unsplash_Y4zNMW3pQAs.png'
import img34 from './vlogimg/unsplash_X2Qf1715_zs.png'
import img35 from './vlogimg/unsplash_X0FzFZmWSRU.png'
import img36 from './vlogimg/unsplash_M_TOzf3lUcA.png'
import img37 from './vlogimg/unsplash_oG_HJu4QDNw.png'
//  third

import img41 from './gamingimg/unsplash_-PhG-v2axtU.png'
import img42 from './gamingimg/unsplash_7rIE9DPdo80.png'
import img43 from './gamingimg/unsplash_Oh-oZ-3Y65A.png'
import img44 from './gamingimg/unsplash_r-ii4jKDL6Y.png'
import img45 from './gamingimg/unsplash_RqO_02KT36w.png'
import img46 from './gamingimg/unsplash_TpdRP89z8G4.png'
import img47 from './gamingimg/unsplash_ugjPgy2BQug.png'
// fourth

import img51 from './Healthimg/unsplash_1VK2fIlgoFQ.png'
import img52 from './Healthimg/unsplash_6FRc5pd1Z8g.png'
import img53 from './Healthimg/unsplash_eot-ka5dM7Q.png'
import img54 from './Healthimg/unsplash_FUEcC64bwZY.png'
import img55 from './Healthimg/unsplash_nCya9c9AadA.png'
import img56 from './Healthimg/unsplash_sHfo3WOgGTU.png'
import img57 from './Healthimg/unsplash_Ug9ZVq24CIk.png'
const Collagecollection = () => {
    return (
        <div>
            <Collage heading = "Fashion Influencers" para = "Top Notch Fashion Influencers for Your Brand"img1 = {img6} img2 ={ img5} img3 = {img3} img4 = {img7} img5 = { img4} img6 = { img2} img7 = { img1} />
            <Collagereverse heading = "Beauty Influencers" para = "Onboard the Most Popular Beauty Influencers" img1 = {img22} img2 ={img23 } img3 = { img26} img4 = {img27  } img5 = {img25} img6 = {img24} img7 = { img21} />
            <Collage heading = "Tech & Gadgets" para = "Find the best Tech influencers for Your Gadget and Brand Promotion"img1 = {img31} img2 ={img32} img3 = {img33} img4 = {img34} img5 = {img35} img6 = {img36} img7 = {img37} />
            <Collagereverse heading = "Gaming Influencers" para = "Best Gaming Influencers at Your FingerTips" img1 = {img41} img2 ={ img44} img3 = {img45} img4 = {img42} img5 = {img43} img6 = {img47} img7 = {img46} />
            <Collage heading = "Health & Fitness Influencers" para = "Amazing Health and Fitness Influencers Ready For your Brand"img1 = {img51} img2 ={img57} img3 = { img55} img4 = {  img53} img5 = { img54} img6 = {img56} img7 = { img52} />
        </div>
    )
}

export default Collagecollection
