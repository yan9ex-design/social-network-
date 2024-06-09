import s from './Message.module.css';
import React from 'react';

const MessageItem = (props) => {
    return (
        <div className={s.message}>
            {props.name}
        </div>
    )
}

const Message = (props) => {

    let messageElements = props.messageData.map (message =>  <MessageItem name={message.message} />);

    return(
        <div className={s.messages}> 
            {messageElements}
            </div>
    )
}

export default Message;