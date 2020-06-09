import {ADD_PRODUCTS} from "../actions/product";
import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const initialState= {
    items:[],
    includedData:[],
    meta:"",


}


const product =  (state=initialState,actions)=>{
    switch (actions.type) {
        case ADD_PRODUCTS:
            //  items:[...state.items,...actions.payload.itemData],
            //                includedData: [...state.includedData,...actions.payload.includedData],


            return{
                ...state,
               items:[...actions.payload.itemData],
               includedData: [...actions.payload.includedData],
                meta:actions.payload.meta,
            }
        default:
            return state;
    }
}

const persistConfig = {
    key: 'productreducer',
    storage,
    whitelist:['includedData']

}



export default persistReducer(persistConfig,product);
