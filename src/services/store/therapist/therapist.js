import * as actionTypes from "./actionTypes";
import { updateObject } from '../../helpers/helpers';
const initialState = {
    errMessage: [],
    therapistStatInfo: []
};

const errMsg = (state, action) => {
    return updateObject( state, {
        errMessage: action.data,
    });
};

const therStatusInfo = (state, action) => {
    return updateObject( state, {
        therapistStatInfo: action.data,
    });
};

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.THERAPIST_STATUS:  return errMsg(state, action);
        case actionTypes.THERAPIST_STATUS_INFO:  return therStatusInfo(state, action);
        default:
            return state;
    }
};

export default reducer;