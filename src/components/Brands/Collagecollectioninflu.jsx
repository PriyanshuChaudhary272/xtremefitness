import React from 'react'
import Collage from './Collage'
import Collagereverse from './Collagereverse'
import img1 from './fashion/Group 1673.png'
import img2 from './fashion/Group 1674.png'
import img3 from './fashion/Group 1675.png'
import img4 from './fashion/Group 1676.png'
import img5 from './fashion/Group 1680.png'
import img6 from './fashion/Group 1681.png'
import img7 from './fashion/image.png'
// first

import img21 from './beautybrandimg/Group 1664.png'
import img22 from './beautybrandimg/Group 1672.png'
import img23 from './beautybrandimg/Group 1681-1.png'
import img24 from './beautybrandimg/Group 1681.png'
import img25 from './beautybrandimg/image-1.png'
import img26 from './beautybrandimg/image-2.png'
import img27 from './beautybrandimg/image.png'
// second

import img31 from './jwelleryimg/image (4).png'
import img32 from './jwelleryimg/Group 1665.png'
import img33 from './jwelleryimg/Group 1666.png'
import img34 from './jwelleryimg/Group 1667.png'
import img35 from './jwelleryimg/Group 1669.png'
import img36 from './jwelleryimg/Group 1681-1.png'
import img37 from './jwelleryimg/Group 1681.png'
//  third

const Collagecollectioninflu = () => {
    return (
        <div>
            <Collage heading = "Fashion Brands" para = "Get Sponsored by Fashion brands"img1 = {img4} img2 ={img3} img3 = { img2} img4 = {img36 } img5 = {img7} img6 = {img6} img7 = { img5} />
            <Collagereverse heading = "Beauty Brands" para = "Sponsorships From popular Beauty Brands" img1 = {img22} img2 ={ img26} img3 = {img21 } img4 = {img37} img5 = {img25} img6 = { img27} img7 = { img1} />
            <Collage heading = "Jewellry Brands" para = "Find the Biggest Jewellery Brands"img1 = { img32} img2 ={ img33} img3 = { img34} img4 = { img23} img5 = {img35} img6 = { img31} img7 = { img24} />
        </div>
    )
}

export default Collagecollectioninflu
