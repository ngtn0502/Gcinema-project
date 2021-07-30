import { baseUrl, METHOD__HTTP } from '../../../configs/api.configs';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN,
  USER_SIGN_UP_FAIL,
  USER_SIGN_UP_SUCCESS,
} from './constantsAction.js';

export const userLoginAction = (loginData, history) => async (dispatch) => {
  const sendRequest = async (dataString) => {
    const response = await fetch(`${baseUrl}/QuanLyNguoiDung/DangNhap`, {
      method: METHOD__HTTP.POST,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json-patch+json',
      },
      body: JSON.stringify(dataString),
    });
    const data = await response.json();
    return data;
  };
  try {
    const data = await sendRequest(loginData);
    localStorage.setItem('userLogin', JSON.stringify(data));
    dispatch({ type: USER_LOGIN, payload: data });
    history.goBack();
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: {
        type: 'Error',
        message: 'Đăng nhập thất bại!',
        message2: 'Vui lòng kiểm tra lại thông tin.',
        goTo: null,
      },
    });
    console.log('ó');
  }
};

export const userSignUpAction = (signUpData, history) => async (dispatch) => {
  //
  const sendRequest = async (data1) => {
    const response = await fetch(`${baseUrl}/QuanLyNguoiDung/DangKy`, {
      method: METHOD__HTTP.POST,
      body: JSON.stringify(data1),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json-patch+json',
      },
    });
    const data = await response.json();
    return data;
  };
  //
  try {
    const data = await sendRequest(signUpData);
    dispatch({
      type: USER_SIGN_UP_SUCCESS,
      payload: {
        type: 'Success',
        message: 'Đăng kí thành công!',
        goTo: '/home',
      },
    });
    history.goBack();
  } catch (error) {
    dispatch({
      type: USER_SIGN_UP_FAIL,
      payload: {
        type: 'Error',
        message: 'Đăng ký thất bại!',
        message2: 'vui lòng kiểm tra lại thông tin',
        goTo: null,
      },
    });
  }
};
