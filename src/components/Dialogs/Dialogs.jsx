import s from './Dialogs.module.css';
import React from 'react';
import Peoples from './Peoples/Peoples';
import Message from './Message/Message';


const Dialogs = (props) => {
    return (
      <div className={s.main_content}>
        <Peoples dialogsData={props.dialogsPage.dialogs} />
        <Message messageData={props.dialogsPage.message} dispatch={props.dispatch} />
      </div>
    );
  }

export default Dialogs;