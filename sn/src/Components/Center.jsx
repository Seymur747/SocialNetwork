import React from "react";
import s from './Assets/Styles/Center.module.css'
import admin from './Assets/Images/admin.jpg'
import CenterPost from './CenterPost.jsx'

let Center=()=>{
    return (
       <>
        <div className={s.wraper}>
            <div className={s.postBox}>
                <div className={s.imageBox}>
                    <img src={admin} alt="" />
                </div>
                <div className={s.textAreaBox}>
                    <textarea name="" id="" cols="50" rows="2" placeholder='Write something' ></textarea>
                    <div className={s.attachements}>
                        <ul>
                            <li>
                                <label htmlFor="file-upload1" className="custom-file-upload">
                                    <i className='fa fa-music'></i>
                                </label><input id="file-upload1" type="file"/>
                            </li>
                            <li>
                                <label htmlFor="file-upload2" className="custom-file-upload">
                                    <i className='fa fa-image'></i>
                                </label><input id="file-upload2" type="file"/>
                            </li>
                            <li>
                                <label htmlFor="file-upload3" className="custom-file-upload">
                                    <i className='fa fa-camera'></i>
                                </label><input id="file-upload3" type="file"/>
                            </li>  
                            <li>
                                <label htmlFor="file-upload3" className="custom-file-upload">
                                    <i className='fas fa-video'></i>
                                </label><input id="file-upload3" type="file"/>
                            </li>                              
                        </ul>
                        <button className='btn btn-primary'>Post</button>
                    </div>
                </div>
            </div>
        </div>
        <CenterPost/>
       </>
    )
}
export default Center
