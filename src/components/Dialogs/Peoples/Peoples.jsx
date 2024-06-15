import s from './Peoples.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.item}>
            <NavLink to={path} className={s.item_link}>{props.name}</NavLink>
        </div>
    )
}

const Peoples = (props) => {


    let dialogsElements = props.dialogsData.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />);

    return (
        <div className={s.items}>
        {dialogsElements}
        </div>
    )
}

export default Peoples;