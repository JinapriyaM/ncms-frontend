import * as actionTypes from "../action/action";

const initialState = {
  firstname: "",
  lastname: "",
  address: "",
  contactno: "",
  district: "",
  locationx: "",
  locationy: "",
  gender: "",
  age: "",
  email: "",
  password: "",
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STEP_ONE_DATA:
      return {
        ...state,
        firstname: action.val.firstname,
        lastname: action.val.lastname,
        address: action.val.address,
        contactno: action.val.contactno,
        district: action.val.district,
        locationx: action.val.locationx,
        locationy: action.val.locationy,
        gender: action.val.gender,
        age: action.val.age,
      };
    case actionTypes.STEP_TWO_DATA:
      return {
        ...state,
        email: action.val.email,
        password: action.val.password,
      };
    case actionTypes.CLEAR_REG_DATA:
      return {
        ...state,
        firstname: "",
        lastname: "",
        address: "",
        contactno: "",
        district: "",
        locationx: "",
        locationy: "",
        gender: "",
        age: "",
        email: "",
        password: "",
      };
    default:
      return state;
  }
};

export default registerReducer;
