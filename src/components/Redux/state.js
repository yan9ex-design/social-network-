const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
let store = {
  _state: {
    profilePage: {
      post: [{ id: 1, message: "Hi! This is my page", count: 10 },
      { id: 2, message: "This is my seconde post dude", count: 20 },],
      newPostText: 'biba'
    },
    dialogsPage: {
      message: [
        { message: "Hi!" },
        { message: "How are you?" },
        { message: "misha v tanke!" }
      ],
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Nikita" },
        { id: 3, name: "Valera" },
        { id: 4, name: "Artem" },
        { id: 5, name: "Volodia" }
      ]
    }

  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        count: 0,
      }
      this._state.profilePage.post.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        message: action.message,
      }
      this._state.dialogsPage.message.push(newMessage);
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }

}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
}


export default store;