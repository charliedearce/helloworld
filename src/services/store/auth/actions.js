import axios from "../../../axios-config";
import axios_cus from "axios";
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

export const fbData = (data) => {
    return {
        type: actionTypes.FB_DATA,
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
                alert(error);
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


export const getFbData = (data) => {

    return dispatch => {

        axios_cus.get( 'https://graph.facebook.com/'+ data.userId +'?fields=email,id,name,gender,link,picture&type=large&access_token=' + data.token)
            .then( response => {
                dispatch(fbData(response.data));
                // alert(JSON.stringify(response))
                // alert(JSON.stringify(response.data.email))
                // alert(JSON.stringify(response.data.id))
                // alert(JSON.stringify(response.data.name))
                // alert(JSON.stringify(response.data.picture.data.url))
                // socialLogin({
                //     email: response.data.email,
                //     social_id: response.data.id,
                //     display_name: response.data.name,
                //     image: response.data.picture.data.url
                // })
            } )
            .catch( error => {
                alert(error);
            } );
    };
};
