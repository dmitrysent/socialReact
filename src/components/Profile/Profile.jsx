import ProfileInfo from "./ProfileInfo/ProfileInfo";

import style from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profiles = (props) => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
        // posts={props.profilePage.posts}
        // newPostText={props.profilePage.newPostText}
        // dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profiles;
