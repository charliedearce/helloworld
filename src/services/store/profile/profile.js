import * as actionTypes from "./actionTypes";
import { updateObject } from '../../helpers/helpers';
const initialState = {
    errMessage: [],
    profileData: [],
    image: ''
};

const profile = (state, action) => {
    return updateObject( state, {
        profileData: action.data,
    });
};

const uploadImage = (state, action) => {
    return updateObject( state, {
        image: action.data,
    });
};

const errMsg = (state, action) => {
    return updateObject( state, {
        errMessage: action.data,
    });
};

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.GET_PROFILE:  return profile(state, action);
        case actionTypes.IMAGE_UPLOAD:  return uploadImage(state, action);
        case actionTypes.UPDATE_PROFILE:  return errMsg(state, action);
        case actionTypes.CHANGE_PASS:  return errMsg(state, action);
        case actionTypes.SIGN_OUT:  return errMsg(state, action);
        default:
            return state;
    }
};

export default reducer;