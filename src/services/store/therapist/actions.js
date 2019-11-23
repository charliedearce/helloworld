import axios from "../../../axios-config";
import * as actionTypes from "./actionTypes";

export const therapStatus = (data) => {
    return {
        type: actionTypes.THERAPIST_STATUS,
        data: data
    };
};

export const therapStatusInfo = (data) => {
    return {
        type: actionTypes.THERAPIST_STATUS_INFO,
        data: data
    };
};

export const therapistStatus = (data) => {
    return dispatch => {
        axios.post( 'therapist-status', data)
            .then( response => {
                dispatch(therapStatus(response.data));
            } )
            .catch( error => {
                console.log(error);
            } );
    };
};

export const therapistStatusInfo = () => {
    return dispatch => {
        axios.get( 'therapist-status')
            .then( response => {
                dispatch(therapStatusInfo(response.data));
            } )
            .catch( error => {
                console.log(error);
            } );
    };
};