import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  {id:1, message: "Hi! This is my page", count: 10},
  {id:2, message: "This is my seconde post dude", count: 20},
]
let messageData = [
  {message: "Hi!"},
  {message: "How are you?"},
  {message: "misha v tanke!"}
]
let dialogsData = [
  {id: 1, name: "Dima"},
  {id: 2, name: "Nikita"},
  {id: 3, name: "Valera"},
  {id: 4, name: "Artem"},
  {id: 5, name: "Volodia"}
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData = {postData} messageData = {messageData} dialogsData = {dialogsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
