import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img
        className={style.avatar}
        src="https://avatars.mds.yandex.net/i?id=526a043ba583e8d38fc93b504db7e4f9-5657981-images-thumbs&n=13"
        alt="avatar img post"
      />
      <div>
        {props.message}
        <button>Like {props.likesCount} </button>{" "}
      </div>
    </div>
  );
};

export default Post;
