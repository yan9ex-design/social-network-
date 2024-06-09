import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.post_item}>
        <img className={s.img} src='https://avatars.dzeninfra.ru/get-zen_doc/8080662/pub_641c5e27fe50c3323bdab8af_641c66ac4add2d1c32e3eb77/scale_1200' alt="avatar" />
        {props.message}
        <div>
        <span>Like</span> {props.count}
        </div>
    </div>
  );
}

export default Post;