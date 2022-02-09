import Post from "./Post/Post";
import style from "./MyPosts.module.css";
// import posts from "./../Profile";
import React from "react";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={style.MyPosts}>
      Create new Post
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        value={props.newPostText}
      />
      <button onClick={onAddPost}>Add Post</button>
      <ul>{postsElements}</ul>
    </div>
  );
};

export default MyPosts;
