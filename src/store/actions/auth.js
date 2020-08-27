import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password, method) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAwblU24OUheXBmnXHW0CFIk1Jf6QsXCjE';
        axios.post(url, authData)
            .then(res => {
                console.log(res);
                dispatch(authSuccess(res));
            })
            .catch(error => {
                console.log(error);
                dispatch(authFail(error));
            })
    }
}