//import { connect } from "react-redux";
import * as actionTypes from "../action/action";

const initialState = {
  username: "",
  name: "bcb",
  type: "",
  isDirector: "",
  email: "",
  logged: false,
  id: "",
  status: "",
  hospitalId: "",
  level: "",
  queue: "",
  district: "",
  locationx: "",
  locationy: "",
};

const userReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case actionTypes.USER_LOGIN_PATIENT:
      return {
        ...state,
        // id: action.val.id,
        username: action.val.username,
        name: action.val.name,
        type: action.val.type,
        logged: true,
        id: action.val.id,
        status: action.val.status,
        hospitalId: action.val.hosid,
        level: action.val.level,
      };
    case actionTypes.USER_LOGIN_PATIENT_QUEUE:
      return {
        ...state,
        // id: action.val.id,
        username: action.val.username,
        name: action.val.name,
        type: action.val.type,
        logged: true,
        id: action.val.id,
        status: action.val.status,
        queue: action.val.queue,
      };
    case actionTypes.USER_LOGIN_DOCTOR:
      return {
        ...state,
        // id: action.val.id,
        username: action.val.username,
        name: action.val.name,
        type: action.val.type,
        logged: true,
        id: action.val.id,
        status: action.val.status,
        hospitalId: action.val.hosid,
        isDirector: action.val.direc,
        // type: action.val.userType,
      };

    case actionTypes.USER_LOGIN_HOSPITAL:
      return {
        ...state,
        // id: action.val.id,
        username: action.val.username,
        name: action.val.names,
        type: action.val.type,
        logged: true,
        id: action.val.id,
        status: action.val.status,
        district: action.val.district,
        locationx: action.val.locationx,
        locationy: action.val.locationy,

        // type: action.val.userType,
      };
    case actionTypes.USER_LOGIN_MOH:
      return {
        ...state,
        // id: action.val.id,
        username: action.val.username,
        name: action.val.name,
        type: action.val.type,
        logged: true,
        id: action.val.id,
        status: action.val.status,
        // type: action.val.userType,
      };
    case "USER_LOGOUT":
      return {
        ...state,
        username: "",
        name: "",
        type: "",
        logged: false,
      };
    default:
      return state;
  }
};

export default userReducer;
