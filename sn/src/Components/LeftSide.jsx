import React from "react";
import s from './Assets/Styles/LeftSide.module.css'

let LeftSide=()=>{
    return (
        <div className={s.pageBlocks}>
            <h3>Shortcuts</h3>
            <ul>
                <li><a href="#"><i className="fas fa-home"></i><span>Home</span></a></li>
                <li><a href="#"><i className="fas fa-home"></i><span>Home</span></a></li>
                <li><a href="#"><i className="fas fa-home"></i><span>Home</span></a></li>
                <li><a href="#"><i className="fas fa-home"></i><span>Home</span></a></li>
                <li><a href="#"><i className="fas fa-home"></i><span>Home</span></a></li>
                <li><a href="#"><i className="fas fa-home"></i><span>Home</span></a></li>
            </ul>
        </div>
    )
}
export default LeftSide
