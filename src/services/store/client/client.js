import * as actionTypes from "./actionTypes";
import { updateObject } from '../../helpers/helpers';
const initialState = {
    errMessage: [],
    therapistList: [],
};

const therapist = (state, action) => {
    return updateObject( state, {
        therapistList: action.data,
    });
};

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.GET_THERAPIST_LIST:  return therapist(state, action);
        default:
            return state;
    }
};

export default reducer;