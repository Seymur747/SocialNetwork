import React from "react";
import s from './Assets/Styles/RightSide.module.css'
import avatar from './Assets/Images/friend-avatar9.jpg'

let RightSide=()=>{
    return (
        <div className={s.wrapper}>
            <div>
                <h4>Your Page</h4>
            </div>
            <div>
                <div className={s.imageDiv}>
                    <img src={avatar} alt="" />
                </div>
                <div  className={s.datasDiv}>
                    <h6>My Page</h6>
                    <h6>Messages</h6>
                    <h6>Notification</h6>
                    <button>Likes</button>
                    <button>Views</button>
                </div>
            </div>
            <div className={s.likesDiv}>
                <span>884</span>
                <br/>
                <a href="">35 new likes  this week</a>
            </div>
            <div>
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
            </div>
        </div>
    )
}
export default RightSide
