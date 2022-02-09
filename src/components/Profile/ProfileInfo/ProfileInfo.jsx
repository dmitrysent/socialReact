import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img
        className={style.img}
        src="https://s1.1zoom.ru/big3/459/Australia_Skyscrapers_Rivers_Evening_Melbourne_514082_6000x4000.jpg"
        alt="main img"
      />
      <div className={style.descriptionBlock}>Photo users + descr</div>
    </div>
  );
};

export default ProfileInfo;
