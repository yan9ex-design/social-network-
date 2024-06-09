import React from 'react';
import s from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={s.nav_wrap}>
      <nav className={s.nav}>
        <ul className={s.nav_list}>
          <li className={s.nav_item}>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink to="/dialogs">Messages</NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink to="/news">News</NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink to="/music" activeClassName={s.active_item}>Music</NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;