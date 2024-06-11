import { rerenderEntireTree } from "../../rerender";

let state = {
    profilePage: {
    post: [{id:1, message: "Hi! This is my page", count: 10}, 
    {id:2, message: "This is my seconde post dude", count: 20},]
},
    dialogsPage: {
        message:[
            {message: "Hi!"},
            {message: "How are you?"},
            {message: "misha v tanke!"}
          ],
          dialogs:  [
            {id: 1, name: "Dima"},
            {id: 2, name: "Nikita"},
            {id: 3, name: "Valera"},
            {id: 4, name: "Artem"},
            {id: 5, name: "Volodia"}
          ]
    }
    
}

export let addPost = (postMessage) => {
  let newPost = {
    id:3,
    message: postMessage,
    count: 0,
  }
    state.profilePage.post.push(newPost);
    rerenderEntireTree(state); 
}

export let addMessage = (message) => {
  let newMessage = {
    message: message,
  }
  state.dialogsPage.message.push(newMessage);
  rerenderEntireTree(state);
}


export default state;