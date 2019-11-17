import axios from "../../../axios-config";
import * as actionTypes from "./actionTypes";

export const profile = (data) => {
    return {
        type: actionTypes.GET_PROFILE,
        data: data
    };
};

export const imageUpload = (data) => {
    return {
        type: actionTypes.IMAGE_UPLOAD,
        data: data
    };
};

export const profileUpdate = (data) => {
    return {
        type: actionTypes.UPDATE_PROFILE,
        data: data
    };
};

export const changePass = (data) => {
    return {
        type: actionTypes.CHANGE_PASS,
        data: data
    };
};

export const signOut = (data) => {
    return {
        type: actionTypes.SIGN_OUT,
        data: data
    };
};

export const getProfile = () => {
    return dispatch => {
        axios.get( 'profile')
            .then( response => {
                dispatch(profile(response.data.success));
            } )
            .catch( error => {
                console.log(error);
            } );
    };
};

export const uploadImage = (file) => {
    return dispatch => {
        let data = new FormData();
        data.append('image', file);
        axios.post( 'image', data)
            .then( response => {
                dispatch(imageUpload(response.data));
            } )
            .catch( error => {
                console.log(error);
            } );
    };
};

export const updateProfile = (data) => {
    return dispatch => {
        axios.post( 'profile', data)
            .then( response => {
                dispatch(profileUpdate(response.data));
            } )
            .catch( error => {
                console.log(error);
            } );
    };
};

export const changePassword = (data) => {
    return dispatch => {
        axios.post( 'changepassword', data)
            .then( response => {
                dispatch(changePass(response.data));
            } )
            .catch( error => {
                console.log(error);
            } );
    };
};

export const Logout = () => {
    return dispatch => {
        axios.post( 'logout')
            .then( response => {
                dispatch(signOut(response.data));
            } )
            .catch( error => {
                console.log(error);
            } );
    };
};

