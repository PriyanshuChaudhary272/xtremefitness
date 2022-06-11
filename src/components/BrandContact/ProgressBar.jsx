import React, {useState} from "react";
const ProgressBar = (props) => {
    const [style, setStyle] = useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `100%`
        }

        setStyle(newStyle);
    }, 200);

    return (
        <div>
            <div class="progress progress-bar bg- brand-progress-bar " style={style}>
                <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
            <p className='m-2'>{props.message}. . .</p>
        </div>
    )
}
export default ProgressBar;