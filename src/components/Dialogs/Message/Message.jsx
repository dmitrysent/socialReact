import style from "./../Dialogs.module.css";
import React from "react";

const Message = (props) => {
  return (
    <div className={style.message} message={props.messages}>
      {props.message}
    </div>
  );
};

export default Message;
