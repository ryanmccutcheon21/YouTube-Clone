import React from 'react'
import './_video.scss'
import { AiFillEye } from 'react-icons/ai'

const Video = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img
                    src="https://i.ytimg.com/an_webp/ELf7xtiEmDk/mqdefault_6s.webp?du=3000&sqp=CP3Gp4QG&rs=AOn4CLA1UutdZ-2Gqc5WE14RMTgZ59cuDA"
                    alt="Video Logo"
                />
                <span>05:43</span>
            </div>
            <div className="video__title">
                Create app in 5 minutes #made by Ryan
            </div>
            <div className="video__details">
                <span>
                    <AiFillEye /> 5m Views *
                </span>
                <span>5 days ago</span>
            </div>
            <div className="video__channel">
                <img
                    src="https://yt3.ggpht.com/ytc/AAUvwnjRSKInGV1ueTGgbiIMzHW9d8Yq8Em2hr_XdcmLHw=s68-c-k-c0x00ffffff-no-rj"
                    alt="Video Channel"
                />
                <p>Rainbow Hat Jr</p>
            </div>
        </div>
    )
}

export default Video
