import {ADD_ITEM_TO_CART} from "../type";
import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const initialState={
    items:[],
};

const cart = (state=initialState,actions)=>{
    switch (actions.type) {
        case ADD_ITEM_TO_CART:
            const item = state.items.find(item=>item.id === actions.payload.id)
            let updateOrNewItems=[];

            if(!item) {
                updateOrNewItems= [...state.items, {...actions.payload}]


            }else{
                updateOrNewItems= state.items.map(item=>{
                    if(item.id === actions.payload.id){
                        item.noOfItems = actions.payload.noOfItems;

                    }
                    return item;
                })



            }
            return {
                ...state,
                items:updateOrNewItems
            }
        default:
            return state;
    }
}


const persistConfig = {
    key: 'root',
    storage,
}


export default persistReducer(persistConfig,cart);
