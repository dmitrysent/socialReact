const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are your?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo-YO" },
    { id: 5, message: "YOYOYO" },
  ],
  newMessageBody: "",

  dialogs: [
    { id: 1, name: "Dimooon" },
    { id: 2, name: "Viktor" },
    { id: 3, name: "Masha" },
    { id: 4, name: "Andrey" },
    { id: 5, name: "Misha" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageBody,
      };
      state.messages.push(newMessage);
      state.newMessageBody = " ";
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageBodyActionCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};
export default dialogsReducer;
