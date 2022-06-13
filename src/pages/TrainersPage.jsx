import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Home/footer'
import Brands from '../components/Brands/Brand'
import Trainer from '../components/Trainer/TrainerProfile'
import TrainersData from '../Assets/Trainers/TrainersData'
// import { setlogEvent } from '../Utils/setlogEvent'
const Trainerspage = () => {
    useEffect(() => {
        // setlogEvent("page_view",{page_title: "influencers"});
    }, [])
    return (
        <div>
            <Brands heading="EXPERT TRAINERS" para="Get training From best trainers out there." img='https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80' />
            <div className='my-5 d-flex flex-wrap'>
                {TrainersData.map((data, i) =>
                    <Link to={`/trainers/${data.name}`} className="col-4 col-md-3">
                        <Trainer img={data.img} name={data.name} role={data.role} key={i} />
                    </Link>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Trainerspage
