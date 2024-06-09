import React from 'react';
import s from './Banner.module.css';

const Banner = () => {
    return(
        <div className={s.wrap_image}>
          <img className={s.main_image} src='https://s1.1zoom.me/big0/846/Iceland_Mountains_Waterfalls_616668_1280x640.jpg' alt='banner'></img>
        </div>
    );
}

export default Banner;