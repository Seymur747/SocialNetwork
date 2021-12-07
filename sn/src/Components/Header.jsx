import React from "react";
import s from './Assets/Styles/Header.module.css'
import logo from './Assets/Images/logo.png'
import admin from './Assets/Images/admin.jpg'

let Header=()=>{
    return (
   <header>
       <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2'>
                    <div className={s.logoBox}>
                        <img src={logo} alt="not found" />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className={s.listBox}>
                        <ul>
                            <li>Home1</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-3'>
                    <ul>
                        <li><a href="#"><i className="fas fa-home"></i></a></li>
                        <li><a href="#"><i className="fas fa-home"></i></a></li>
                        <li><a href="#"><i className="fas fa-home"></i></a></li>
                        <li><a href="#"><i className="fas fa-home"></i></a></li>
                    </ul>
                </div>
                <div className='col-md-1'>
                  <div className={s.imageBox}>
                     <img src={admin} alt="not found" />
                  </div>
                </div>
            </div>
       </div>
   </header>
    )
}
export default Header;