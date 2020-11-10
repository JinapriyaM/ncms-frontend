export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_PATIENT = "USER_LOGIN_PATIENT";
export const USER_LOGIN_PATIENT_QUEUE = "USER_LOGIN_PATIENT";
export const USER_LOGIN_DOCTOR = "USER_LOGIN_DOCTOR";
export const USER_LOGIN_HOSPITAL = "USER_LOGIN_HOSPITAL";
export const USER_LOGIN_MOH = "USER_LOGIN_MOH";

export const USER_LOGOUT = "USER_LOGOUT";

export const STEP_ONE_DATA = "STEP_ONE_DATA";
export const STEP_TWO_DATA = "STEP_TWO_DATA";
export const CLEAR_REG_DATA = "CLEAR_REG_DATA";


export const setUserData = (data) => {
    return {
        type: USER_LOGIN,
        val: data
    }
} 
export const setUserDataPatient = (data) => {
    return {
        type: USER_LOGIN_PATIENT,
        val: data
    }
} 
export const setUserDataPatientQueue = (data) => {
    return {
        type: USER_LOGIN_PATIENT_QUEUE,
        val: data
    }
} 
export const setUserDataDoctor = (data) => {
    return {
        type: USER_LOGIN_DOCTOR,
        val: data
    }
} 
export const setUserDataHospital = (data) => {
    return {
        type: USER_LOGIN_HOSPITAL,
        val: data
    }
} 
export const setUserDataMoh = (data) => {
    return {
        type: USER_LOGIN_MOH,
        val: data
    }
} 


export const userLogout = () => {
    return {
        type: USER_LOGOUT,
    }
}

export const stepOneData = (data) => {
    return {
        type: STEP_ONE_DATA,
        val: data
    }
}
export const stepTwoData = (data) => {
    return {
        type: STEP_TWO_DATA,
        val: data
    }
}

export const clearRegData = () => {
    return {
        type: CLEAR_REG_DATA
    }
}