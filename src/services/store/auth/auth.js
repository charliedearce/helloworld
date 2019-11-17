import * as actionTypes from "./actionTypes";
import { updateObject } from '../../helpers/helpers';
const initialState = {
    errMessage: [],
    token: []
};

const token = (state, action) => {
    return updateObject( state, {
        token: action.data,
    });
};

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.SOCIAL_LOGIN:  return token(state, action);
        case actionTypes.LOGIN:  return token(state, action);
        case actionTypes.CLIENT_REG:  return token(state, action);
        case actionTypes.THERAPIST_REG:  return token(state, action);
        default:
            return state;
    }
};

export default reducer;