import React from "react";
import s from './Assets/Styles/FriendsLine.module.css'
import avatar from './Assets/Images/friend-avatar9.jpg'

let FriendsLine=()=>{
    return (
        <div className={s.friendsList}>
            <div>
                <ul>
                    <li>
                        <div className={s.imageDiv}><img src={avatar} alt="not found"/></div>
                    </li>
                    <li>
                        <div className={s.imageDiv}><img src={avatar} alt="not found"/></div>
                    </li>
                    <li>
                        <div className={s.imageDiv}><img src={avatar} alt="not found"/></div>
                    </li>
                    <li>
                        <div className={s.imageDiv}><img src={avatar} alt="not found"/></div>
                    </li>
                    <li>
                        <div className={s.imageDiv}><img src={avatar} alt="not found"/></div>
                    </li>
                    <li>
                        <div className={s.imageDiv}><img src={avatar} alt="not found"/></div>
                    </li>
                    <li>
                        <div className={s.imageDiv}><img src={avatar} alt="not found"/></div>
                    </li>
                    <li>
                        <div className={s.imageDiv}><img src={avatar} alt="not found"/></div>
                    </li>
                    <li>
                        <div className={s.imageDiv}><img src={avatar} alt="not found"/></div>
                    </li>
                    <li>
                        <div className={s.imageDiv}><img src={avatar} alt="not found"/></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default FriendsLine
