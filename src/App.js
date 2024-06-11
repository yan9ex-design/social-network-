import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import state from './components/Redux/state';


const App = (props) => {
  const [postData, setPostData] = useState(state.profilePage.post);
  const [messageData, setMessageData] = useState(state.dialogsPage.message);
  const [dialogsData, setDialogsData] = useState(state.dialogsPage.dialogs);

  return (
      <div className='app-container'>
        <Header />
        <Sidebar />
        <div className='app-container-content'>
          <Routes>
          <Route path='/profile' element= {<Profile postData={postData} addPost = {props.addPost} />} />
          <Route path='/dialogs/*' element= {<Dialogs messageData={messageData} dialogsData={dialogsData} addMessage = {props.addMessage} />} />
          <Route path='/news' element= {<News />} />
          <Route path='/music' element= {<Music />} />
          <Route path='/settings' element= {<Settings />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;