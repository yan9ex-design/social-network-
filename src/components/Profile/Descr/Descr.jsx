import React from 'react';
import s from './Descr.module.css';

const Descr = () => {
    return(
        <div className={s.about_me}>
        <div className={s.avatar_wrap}>
          <img className={s.avatar} src='https://avatars.dzeninfra.ru/get-zen_doc/8080662/pub_641c5e27fe50c3323bdab8af_641c66ac4add2d1c32e3eb77/scale_1200' alt='avatar'></img>
        </div>
        <div className={s.about_me_text}>
          <h1 className={s.full_name}>Завалин Никита</h1>
          <p className={s.descr}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, unde!
          </p>
        </div>
      </div>
    )
}

export default Descr;