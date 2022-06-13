import React, { useEffect } from 'react'
import Navbar3 from '../components/Home/navbar3'
import TrainerIntro from '../components/Trainer/TrainerIntro'
import Footer from '../components/Home/footer'
import { useParams } from "react-router-dom";
import TrainersData from '../Assets/Trainers/TrainersData'
import { useState } from 'react';

const TrainerProfile = () => {
    const [data, setData] = useState("");
    const params = useParams();
    useEffect(() => {
       setData(TrainersData.filter((res) => res.name === params.id)[0]);
    }, [params]);
    return (
        <>
        {/* {console.log(data)} */}
            <Navbar3 />
            <TrainerIntro img1={data.img} name = {data.name} intro = {data.intro} role ={data.role} contact = {data.contact} email = {data.email} />
            <Footer />
        </>
    )
}
export default TrainerProfile;