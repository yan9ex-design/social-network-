import React from 'react';
import s from './MyPosts.module.css';
import Post from '../Post/Post';

const MyPosts = (props) => {

  let postElements = props.postData.map(post =>  <Post message ={post.message} count ={post.count} />)

  let newPostLink = React.createRef();

  let addPosts = () => {
    debugger;
    let text = newPostLink.current.value;
    props.addPost(text);
  }

  return (
    <div className={s.main_content}>
      <div className={s.my_post}>
        <h2 className={s.title}>My post</h2>
        <div className={s.new_post}>
          <textarea className={s.write_post} rows={5} cols={100} ref={newPostLink}></textarea>
          <button className={s.add_btn} onClick = {addPosts} >Add post</button>
        </div>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;