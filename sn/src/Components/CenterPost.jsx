import React from "react";
import s from './Assets/Styles/CenterPost.module.css';
import avatar from './Assets/Images/friend-avatar9.jpg'
import userPost from './Assets/Images/user-post.jpg'

let CenterPost=()=>{
    return  (

        <div className={s.centerWrapper}>
            <div className={s.postBox2}>
                <div>
                    <div className={s.imageBox}>
                        <img src={avatar} alt="" />
                    </div>
                    <div className={s.uDatas}>
                        <h6>Janice Griffith</h6>
                        <span>Published: June,2 2018 19:PM</span>
                    </div>
                </div>
                <div>
                    <div className={s.imageBox2}>
                        <img src={userPost} alt="" />
                    </div>
                </div>
                <div>
                    <div className={s.iconsBox}>
                        <ul>
                            <li><span><i className='fa fa-heart'></i><ins>1.2</ins></span></li>
                            <li><span><i className='fa fa-heart'></i><ins>1.2</ins></span></li>
                            <li><span><i className='fa fa-heart'></i><ins>1.2</ins></span></li>
                            <li><span><i className='fa fa-heart'></i><ins>1.2</ins></span></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className={s.textBox}>
                        <p>World's most beautiful car in Curabitur #test drive booking ! the most beatuiful car available 
                            in america and the saudia arabia, you can book your test drive by our official website
                            </p>
                    </div>
                </div>
                <div>
                    <div className={s.commentBox}>
                        <ul>
                            <li>
                                <div className={s.postCommentBox}>
                                    <div className={s.imageBox}>
                                        <img src={avatar} alt="" />
                                    </div>
                                    <div className={s.commentArea}>
                                        <div className={s.commentAreaTexts}>
                                            <a href="#">Jason Borne </a>
                                            <span>1 month ago </span>
                                            <p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={s.postCommentBox}>
                                    <div className={s.imageBox}>
                                        <img src={avatar} alt="" />
                                    </div>
                                    <div className={s.commentArea}>
                                        <div className={s.commentAreaTexts}>
                                            <a href="#">Jason Borne </a>
                                            <span>1 month ago </span>
                                            <p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={s.postCommentBox}>
                                    <div className={s.imageBox}>
                                        <img src={avatar} alt="" />
                                    </div>
                                    <div className={s.commentArea}>
                                        <div className={s.commentAreaTexts}>
                                            <a href="#">Jason Borne </a>
                                            <span>1 month ago </span>
                                            <p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={s.postCommentBox}>
                                    <div className={s.imageBox}>
                                        <img src={avatar} alt="" />
                                    </div>
                                    <div className={s.commentArea}>
                                        <div className={s.commentAreaTexts}>
                                            <a href="#">Jason Borne </a>
                                            <span>1 month ago </span>
                                            <p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div >
                    <div className={s.commentBox2}>
                        <h6> More Comments</h6>
                        <input type="text"  placeholder='Post your comment'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CenterPost;