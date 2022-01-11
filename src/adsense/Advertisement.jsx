import React, { Component } from 'react';
require('dotenv').config();

class GoogleAds extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({ });
    }

    render() {
        return (
            <ins className="adsbygoogle"
            style={{display:"block", textAlign:"center"}}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client={process.env.REACT_APP_ADSENSE_AD_CLIENT}
            data-ad-slot={this.props.slot}></ins>
        );
    }
}

export default GoogleAds;