import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import LoginHomeCarousel1 from "./LoginHomeCarousel1";
// import img1 from '/Users/priyanshuchaudhary/LV_Flytant/client/src/components/LoginHome/Images2/Vector (4).svg'
// import img2 from '/Users/priyanshuchaudhary/LV_Flytant/client/src/components/LoginHome/Images2/Vector (3).svg'
// import img3 from '/Users/priyanshuchaudhary/LV_Flytant/client/src/components/LoginHome/Images2/Vector (2).svg'
// import img4 from '/Users/priyanshuchaudhary/LV_Flytant/client/src/components/LoginHome/Images2/brandico_facebook-rect.svg'
import Slider from "react-slick"
import './common2.css';
const BrandCarouselDiv = () => {
    return (
        <>
            <div className="m-3">
                <div className="">
                    <img className="brand-contact-carousel-img img-fluid" src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" alt="" />
                </div>
                <div className="row mt-2 d-flex align-items-center">
                    <div className="col-8 p-0"><p className="brand-contact-carousel-name m-0 ms-2">Andrew dale</p></div>
                    <div className="col-4 p-0"><p className="brand-contact-carousel-details d-flex m-0 justify-content-center">M 21, Delhi</p></div>
                </div>
                <div className="d-flex brands-contact-carousel-handles m-1">
                    {/* <a href=""><img src={img3} className="img-fluid m-1 p-0" alt="" /></a>
                    <a href=""><img src={img4} className="img-fluid m-1" alt="" /></a>
                    <a href=""><img src={img2} className="img-fluid m-1" alt="" /></a>
                    <a href=""><img src={img1} className="img-fluid m-1" alt="" /></a> */}
                </div>
                <div className="brands-contact-carousel-highlights">
                    <div className="d-flex align-items-center mt-3">
                        <div className="brand-contact-carousel-highlights-div mx-2 px-2 d-flex flex-column justify-content-center align-items-center"><p className="m-1">Fashion</p></div>
                        <div className="brand-contact-carousel-highlights-div mx-2 px-2 d-flex flex-column justify-content-center align-items-center"><p className="m-1">Beauty</p></div>
                        <div className="brand-contact-carousel-highlights-div mx-2 px-2 d-flex flex-column justify-content-center align-items-center"><p className="m-1">Makeup</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}
const FeaturedInfluencer = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="max-min mx-auto">
                <div className="LoginHome-influencer-div">
                    <h1 className="LoginHome-influencer-h1 mx-4 my-5">Featured Influencers</h1>
                </div>
                <Slider {...settings}>
                    <BrandCarouselDiv />
                    <BrandCarouselDiv />
                    <BrandCarouselDiv />
                    <BrandCarouselDiv />
                    <BrandCarouselDiv />
                    <BrandCarouselDiv />
                    <BrandCarouselDiv />
                    <BrandCarouselDiv />
                    <BrandCarouselDiv />
                    <BrandCarouselDiv />
                    <BrandCarouselDiv />
                    <BrandCarouselDiv />
                    <BrandCarouselDiv />
                </Slider>
                {/* <div className="d-flex carousel-overflow-x">
                </div> */}
            </div>
        </>
    )
};

export default FeaturedInfluencer;
