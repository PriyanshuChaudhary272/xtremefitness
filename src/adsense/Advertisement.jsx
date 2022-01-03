import React, { Component } from 'react';

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
            data-ad-client="ca-pub-4102397689150467"
            data-ad-slot={this.props.slot}></ins>
        );
    }
}

export default GoogleAds;