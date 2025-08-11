import axios from "axios";
import {
  GETALL_STUDENTS,
  TOGGLE_STUDENT_TAB,
  GETALL_USERS,
  TOGGLE_TAB,
  SIGNUP_USER,
  LOGIN_USER,
  GETALL_STUDENTS_FAILURE,
  LOGIN_FAILURE,
  SIGNUP_FAILURE,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  SIGNOUT_USER
} from "./type";


const apiURL = "http://localhost:8000";


//---------------------------jwt-verification-------------------------------//
const getAxiosConfig = (params = {}) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: params,
  };
};
//---------------------------jwt-verification-------------------------------//


export const getAllStudents = (params) => async (dispatch) => {
  try {
    const config = getAxiosConfig(params);
    const res = await axios.get(`${apiURL}/clg/students/all`, config);
    dispatch({ type: GETALL_STUDENTS, payload: res.data });
  } catch (err) {
    console.log("Error getting students!", err.message);
    dispatch({ type: GETALL_STUDENTS_FAILURE, payload: err.message });
  }
};
//

export const toggleStudent = (tabType) => async (dispatch) => {
  try {
    const config = getAxiosConfig();
    console.log(config);
    const res = await axios.get(`${apiURL}/clg/students/${tabType}`, config);
    dispatch({
      type: TOGGLE_STUDENT_TAB,
      payload: res.data,
    });
  } catch (err) {
    console.log("error getting students!", err.message);
  }
};

export const getAllUsers = (params) => async (dispatch) => {
  try {
    const config = getAxiosConfig(params);
    const res = await axios.get(`${apiURL}/admin/auth`, config);
    dispatch({ type: GETALL_USERS, payload: res.data });
  } catch (err) {
    console.log("error getting Users!", err.message);
  }
};

export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLE_TAB, selected: tab });
};

export const updateStudent = (id,name,semester,math,english,science,average) => async (dispatch) => {
  try{
    const config = getAxiosConfig();
    const res = await axios.patch(`${apiURL}/clg/students/${id}`,{name,semester,math,english,science,average},config);
    dispatch({type : UPDATE_STUDENT, payload: res.data});
  }catch (err) {
    console.log("error updating Users!", err.message);
  }
}

export const deleteStudent = (id) => async (dispatch) => {
  try{
    const config = getAxiosConfig();
    const res = await axios.delete(`${apiURL}/clg/students/${id}`,config);
    dispatch({type : DELETE_STUDENT, payload: res.data});
  }catch (err) {
    console.log("error deleting Users!", err.message);
  }
}

//-----------------------------authentication--------------------------------//
export const signupUser =
  (id, name, role, password, passwordConfirm) => async (dispatch) => {
    try {
      const res = await axios.post(`${apiURL}/admin/auth/signup`, {
        id,
        name,
        role,
        password,
        passwordConfirm,
      });
      const { userToken } = res.data;
      localStorage.setItem("token", userToken);
      dispatch({ type: SIGNUP_USER, payload: res.data });
    } catch (err) {
      console.log("Error signing in!", err.message);
      dispatch({ type: SIGNUP_FAILURE, payload: err.message });
    }
  };
//
export const loginUser = (id, password) => async (dispatch) => {
  try {
    const res = await axios.post(`${apiURL}/admin/auth/login`, {
      id,
      password,
    });

    // Store the token in localStorage
    const { userToken } = res.data;
    localStorage.setItem("token", userToken);
    // console.log(userToken);

    dispatch({ type: LOGIN_USER, payload: res.data });
  } catch (err) {
    console.log("Error logging in!", err.message);
    dispatch({ type: LOGIN_FAILURE, payload: err.message });
  }
};

export const signOutUser = ()  => {
  return (dispatch) => {
    localStorage.removeItem('token');  // Remove the token from localStorage
    dispatch({ type: SIGNOUT_USER, payload: null});  // Dispatch the sign-out action
  };
};
//-----------------------------authentication--------------------------------//