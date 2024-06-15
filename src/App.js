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


const App = (props) => {

  return (
    <div className='app-container'>
      <Header />
      <Sidebar />
      <div className='app-container-content'>
        <Routes>
          <Route path='/profile' element={<Profile
            postData={props.state.profilePage}
            dispatch={props.dispatch} />} />

          <Route path='/dialogs/*' element={<Dialogs
            dialogsPage={props.state.dialogsPage}
            dispatch={props.dispatch} />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;