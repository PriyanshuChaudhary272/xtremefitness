import React from 'react'
import Contacticons from '../Home/contacticons'
const Ads = () => {
    return (
        <>
            <div >
                <div className="row d-flex justify-content-center aboutdiv max-min mx-auto ">
                    <div className="col-md-8 col-11 aboutdiv2">
                        <div>
                            <h1 className='my-md-3'>Flytant Ads
                            </h1>
                            <h3 className='my-3'>We want to show you ads that are meaningful and you find them interesting and useful. Here’s an overview of how Flytant Ads work.

                            </h3>
                        </div>
                    </div>
                    <div className="col-md-8 col-11 mt-5">
                        <div>
                            <h2 className='my-4'>What are Flytant Ads?
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-7 col-11 mt-md-2 mb-4">
                        <ul className='privacylist'>
                            <li><p>You may see various kinds of ads on Flytant, including Sponsored Ads, Promoted Ads and Promoted Posts. We can show these ads to you when you are logged in or logged out of Flytant. They are clearly marked with a “Sponsored” icon. You can interact with most promoted content in much the same way as organic content.</p></li>
                        </ul>
                    </div>
                    <div className="col-md-8 col-11">
                        <div>
                            <h2 className='my-5'>Why you see certain Ads?
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-7 col-11 mt-0 mt-md-2 mb-2 mb-md-5">
                        <ul className='privacylist mb-5 pb-5'>
                            <li><p>Your activity on Flytant, the information you provide to Flytant, and our relationships with ad partners all help to make the sponsored content more relevant for you.

                            </p></li>
                            <li><p>When you use Flytant to follow, Like, search, view, or interact with posts or Flytant accounts, we may use these actions to customise Flytant Ads for you. Have more fun with  For example, if you search for a specific term, we may show you promoted content related to that topic. We also might customize ads using other information about you, such as your profile information; your mobile device location (if location features are turned on); your IP address; or the apps installed on your device. This helps us show you local ads and other ads that you might prefer. </p></li>
                            <li><p>Flytant may also personalise ads based on information that Flytant and our affiliates collect and that our ad partners share with us, such as a hashed email address, a mobile device identifier, or browser-related information (a browser cookie ID).</p></li>
                            <li><p>This helps Flytant display ads about things you’ve already shown interest in from brands and businesses that you may like.. You could also see this business as a Promoted Account in one of your “Who to Follow” suggestions.</p></li>
                        </ul>
                    </div>
                </div>
                    <Contacticons />
            </div>

        </>
    )
}

export default Ads;
