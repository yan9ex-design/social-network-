import s from './Dialogs.module.css';
import React from 'react';
import Peoples from './Peoples/Peoples';
import Message from './Message/Message';


const Dialogs = (props) => {
    return (
        <div className={s.main_content}>
            <Peoples dialogsData = {props.dialogsData} />
            <Message  messageData = {props.messageData} addMessage = {props.addMessage} />
        </div>
    );
}

export default Dialogs;