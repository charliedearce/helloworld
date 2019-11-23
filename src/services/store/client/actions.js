import axios from "../../../axios-config";
import * as actionTypes from "./actionTypes";

export const therapist = (data) => {
    return {
        type: actionTypes.GET_THERAPIST_LIST,
        data: data
    };
};

export const getTherapistList = (data = '') => {
    return dispatch => {
        axios.get( 'therapist?name=' + data)
            .then( response => {
                dispatch(therapist(response.data));
            } )
            .catch( error => {
                console.log(error);
            } );
    };
};

