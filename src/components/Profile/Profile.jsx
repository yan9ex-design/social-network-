import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Banner from './Banner/Banner';
import Descr from './Descr/Descr';

const Profile = (props) => {
  return (
    <div className={s.main_content}>
        <Banner />
        <Descr />
        <MyPosts postData = {props.postData.post}
        newPostText = {props.postData.newPostText}
        dispatch = {props.dispatch} />
    </div>
  );
}

export default Profile;