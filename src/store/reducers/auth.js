import {LOGIN, LOGOUT, UPDATE_USER} from "../actions/auth";
import {  persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const initialState = {
    currentUser:{},
    token:"",
}

const auth = (state=initialState, actions)=>{
    switch (actions.type) {
        case LOGIN:
            return{
                currentUser:actions.payload.user,
                token:actions.payload.token,
            }
        case UPDATE_USER:
            return{
                ...state,
                currentUser: actions.payload
            }
        case LOGOUT:
            return{
                currentUser: {},
                token: "",
            }
        default:
            return state;
    }
}

const persistConfig = {
    key: 'authentication',
    storage,
}

export default persistReducer(persistConfig,auth);
