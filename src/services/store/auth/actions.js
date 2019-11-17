import axios from "../../../axios-config";
import * as actionTypes from "./actionTypes";

export const socLogin = (data) => {
    return {
        type: actionTypes.SOCIAL_LOGIN,
        data: data
    };
};

export const login = (data) => {
    return {
        type: actionTypes.LOGIN,
        data: data
    };
};

export const clientReg = (data) => {
    return {
        type: actionTypes.CLIENT_REG,
        data: data
    };
};

export const therapistReg = (data) => {
    return {
        type: actionTypes.THERAPIST_REG,
        data: data
    };
};

export const socialLogin = (data) => {
    return dispatch => {
        axios.post( 'social-client', data)
            .then( response => {
                dispatch(socLogin(response.data));
            } )
            .catch( error => {
                console.log(error);
            } );
    };
};

export const Login = (data) => {
    return dispatch => {
        axios.post( 'login', data)
            .then( response => {
                dispatch(login(response.data));
            } )
            .catch( error => {
                console.log(error);
            } );
    };
};

export const clientRegister = (data) => {
    return dispatch => {
        axios.post( 'register-client', data)
            .then( response => {
                console.log(response)
                dispatch(clientReg(response.data));
            } )
            .catch( error => {
                console.log(error);
            } );
    };
};

export const therapistRegister = (data) => {
    return dispatch => {
        axios.post( 'register-therapist', data)
            .then( response => {
                console.log(response)
                dispatch(therapistReg(response.data));
            } )
            .catch( error => {
                console.log(error);
            } );
    };
};
