import React from 'react'
import s1 from './contacticons/Group 1669.png'
import s2 from './contacticons/Group 1673.png'
import s3 from './contacticons/Group 1670.png'
import s4 from './contacticons/Group 1672.png'
import s5 from './contacticons/Group 1671.png'
import s6 from './contacticons/Group 1674 (1).png'
const contacticons = () => {
    return (
        <div className='contacticons py-5'>
            <div className="row ">
                <p style={{ color: "white" }} className='text-center fs-4 mb-5 mt-3'>Or connect with us on</p>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 d-flex flex-column align-items-center flex-sm-row">
                        <div className="col-md-6 d-flex p-0 justify-content-between">
                            <div className="col d-flex justify-content-center">
                                <a href="https://www.instagram.com/flytant/" target="_blank" rel="noreferrer" ><img src={s1} className=" figure-img img-fluid rounded px-3 px-md-5" alt="..." /></a>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <a href="https://www.youtube.com/channel/UC_r46_UgBvaG2k94LDjEIWQ" target="_blank" rel="noreferrer" ><img src={s2} className=" figure-img img-fluid rounded px-3 px-md-5" alt="..." /></a>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <a href="https://www.facebook.com/flytantapp/" target="_blank" rel="noreferrer" ><img src={s3} className=" figure-img img-fluid rounded px-3  px-md-5" alt="..." /></a>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex p-0 justify-content-between">
                            <div className="col d-flex justify-content-center">
                                <a href="https://www.linkedin.com/company/flytant/mycompany/" target="_blank" rel="noreferrer" ><img src={s4} className=" figure-img img-fluid rounded px-3 px-md-5" alt="..." /></a>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <a href="https://twitter.com/flytant" target="_blank" rel="noreferrer" ><img src={s5} className=" figure-img img-fluid rounded px-3 px-md-5" alt="..." /></a>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=contact@flytant.com" target="_blank" rel="noreferrer" ><img src={s6} className=" figure-img img-fluid rounded px-3 px-md-5" alt="..." /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contacticons
