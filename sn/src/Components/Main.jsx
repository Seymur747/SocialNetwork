import React from "react";
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import Center from './Center'
import FriendsLine from './FriendsLine'
import s from './Assets/Styles/Main.module.css'
let Main=()=>{
    return (
        <div className={`container-fluid  ${s.fullContent}`}>
            <div className='row'>
                <div className='col-md-3'><LeftSide/></div>
                <div className='col-md-5'><Center/></div>
                <div className='col-md-3'><RightSide/></div>
                <div className='col-md-1'><FriendsLine/>f</div>
            </div>
        </div>
    )
}
export default Main