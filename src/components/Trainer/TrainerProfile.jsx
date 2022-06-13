import './Trainer.css'
const Trainer = (data) => {
    return (
        <div className='mt-5 trainer-div'>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <div className='d-flex justify-content-center'>
                    <img className='trainer-profile img-fluid trainer-img rounded' src={data.img || "https://images.unsplash.com/photo-1559949557-7d0ac3e655f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1145&q=80"} alt="" />
                </div>
                <div className='trainer-name'>
                    <h4 className='mb-0 mb-md-3 mt-2'>{data.name || "Pawan Sharma"}</h4>
                </div>
                <div className='trainer-intro'>
                    <p className='pt-0 mt-0'>{data.role || "Personal Trainer"}</p>
                </div>
            </div>
        </div>
    )
}
export default Trainer