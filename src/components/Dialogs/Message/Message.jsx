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
    let inputFieldLink = React.createRef();
    let sendMessage = () => {
        let message = inputFieldLink.current.value;
        props.addMessage(message);
    }


    return(
        <div className={s.messages}> 
            {messageElements}
            <div className={s.messageInput}>
            <textarea className={s.inputField} ref={inputFieldLink}></textarea>
            <button className={s.sendButton} onClick={sendMessage} >Send</button>
            </div>
            </div>
    )
}

export default Message;