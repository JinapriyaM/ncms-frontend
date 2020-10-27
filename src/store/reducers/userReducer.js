//import { connect } from "react-redux";

const initialState = {
  username: "",
  name: "bcb",
  type: "",
  isDirector: "",
  email: "",
  logged: false
};

const userReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        // id: action.val.id,
        username: action.val.username,
        name: action.val.name,
        type: action.val.type,
        logged: true
        // type: action.val.userType,
      };
    case "USER_LOGOUT":
      return {
        ...state,
        username: "",
        name: "",
        type: "",
        logged: false
      }
    default:
      return state;
  }
};

export default userReducer;
